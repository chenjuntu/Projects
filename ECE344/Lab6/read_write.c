#include "testfs.h"
#include "list.h"
#include "super.h"
#include "block.h"
#include "inode.h"

/* given logical block number, read the corresponding physical block into block.
 * return physical block number.
 * returns 0 if physical block does not exist.
 * returns negative value on other errors. */
static int
testfs_read_block(struct inode *in, int log_block_nr, char *block)
{
	int phy_block_nr = 0;

	assert(log_block_nr >= 0);
	if (log_block_nr < NR_DIRECT_BLOCKS) {
		phy_block_nr = (int)in->in.i_block_nr[log_block_nr];
	} 
        else {
		log_block_nr -= NR_DIRECT_BLOCKS;

		if (log_block_nr >= NR_INDIRECT_BLOCKS)
                {    //Use double indirect blocks
                    log_block_nr -= NR_INDIRECT_BLOCKS;
                    s32 Index = log_block_nr / NR_INDIRECT_BLOCKS;
                    s32 Index2 = log_block_nr % NR_INDIRECT_BLOCKS;
                    if(in->in.i_dindirect > 0){
                        read_blocks(in->sb, block, in->in.i_dindirect, 1);
                        phy_block_nr = ((int *)block)[Index];
                        if(phy_block_nr <= 0)
                        {
                            goto out;
                        }
                        read_blocks(in->sb, block, phy_block_nr, 1);
                        phy_block_nr = ((int *)block)[Index2];
                        goto out;
                    }
                    
                }
		if (in->in.i_indirect > 0) {
			read_blocks(in->sb, block, in->in.i_indirect, 1);
			phy_block_nr = ((int *)block)[log_block_nr];
		}
	}
        out:
	if (phy_block_nr > 0) {
		read_blocks(in->sb, block, phy_block_nr, 1);
	} else {
		/* we support sparse files by zeroing out a block that is not
		 * allocated on disk. */
		bzero(block, BLOCK_SIZE);
	}
	return phy_block_nr;
}

int
testfs_read_data(struct inode *in, char *buf, off_t start, size_t size)
{
	char block[BLOCK_SIZE];
	long block_nr = start / BLOCK_SIZE;
	long block_ix = start % BLOCK_SIZE;
	int ret;

	assert(buf);
	if (start + (off_t) size > in->in.i_size) {
		size = in->in.i_size - start;
	}
	if (block_ix + size > BLOCK_SIZE) {
            long end_nr = (start + size) / BLOCK_SIZE;
            long end_ix = (start + size) % BLOCK_SIZE;
            long middle_nr = end_nr - block_nr;
            int i;
            //First we copy the head of blocks
            if ((ret = testfs_read_block(in, block_nr, block)) < 0)
            	return ret;
            memcpy(buf, block + block_ix, BLOCK_SIZE - block_ix);
            buf = buf + BLOCK_SIZE - block_ix;
            //Then we copy those blocks that in middle
            for(i = 1; i < middle_nr; i++)
            {
                if ((ret = testfs_read_block(in, block_nr + i, block)) < 0)
                    return ret;
                memcpy(buf, block, BLOCK_SIZE);
                buf = buf + BLOCK_SIZE;
            }
            //Finally, the ending block
            if ((ret = testfs_read_block(in, end_nr, block)) < 0)
            	return ret;
            memcpy(buf, block, end_ix);
	}
        //This is the case block_ix+size <= BLOCK_SIZE
        else
        {
            if ((ret = testfs_read_block(in, block_nr, block)) < 0)
            	return ret;
            memcpy(buf, block + block_ix, size);
        }
	/* return the number of bytes read or any error */
	return size;
}

/* given logical block number, allocate a new physical block, if it does not
 * exist already, and return the physical block number that is allocated.
 * returns negative value on error. */
static int
testfs_allocate_block(struct inode *in, int log_block_nr, char *block)
{
        int phy_block_nr;
	char indirect[BLOCK_SIZE];
        char dindirect[BLOCK_SIZE];
	int indirect_allocated = 0;
        int dindirect_allocated = 0;
        s32 Index;
        s32 Index2;
        
	assert(log_block_nr >= 0);
	phy_block_nr = testfs_read_block(in, log_block_nr, block);

	/* phy_block_nr > 0: block exists, so we don't need to allocate it, 
	   phy_block_nr < 0: some error */
	if (phy_block_nr != 0)
		return phy_block_nr;

	/* allocate a direct block */
	if (log_block_nr < NR_DIRECT_BLOCKS) {
		assert(in->in.i_block_nr[log_block_nr] == 0);
		phy_block_nr = testfs_alloc_block_for_inode(in);
		if (phy_block_nr >= 0) {
			in->in.i_block_nr[log_block_nr] = phy_block_nr;
		}
		return phy_block_nr;
	}

	log_block_nr -= NR_DIRECT_BLOCKS;
        //Allocate in the double indirect block
	if (log_block_nr >= NR_INDIRECT_BLOCKS)
	{
            log_block_nr -= NR_INDIRECT_BLOCKS;
            Index = log_block_nr / NR_INDIRECT_BLOCKS;
            Index2 = log_block_nr % NR_INDIRECT_BLOCKS;
            //First, need to decide if double indirect exists or not.
            if(in->in.i_dindirect == 0)
            {
                //It is not exists, allocate it.
                bzero(dindirect, BLOCK_SIZE);
                phy_block_nr = testfs_alloc_block_for_inode(in);
                if (phy_block_nr < 0)
			return phy_block_nr;
                dindirect_allocated = 1;
                in->in.i_dindirect = phy_block_nr;
            }
            else
            {
                //It does exists, read it.
                read_blocks(in->sb, dindirect, in->in.i_dindirect, 1);
            }
            //So far, dindirect is holding the double indirect level data
            //Then we check if indirect blocks exist
            if(((int *)dindirect)[Index] != 0)
            {
                //The indirect block exists, read it
                read_blocks(in->sb, indirect, ((int *)dindirect)[Index], 1);
            }
            else
            {
                //The indirect block doesn't exist, create it
                bzero(indirect, BLOCK_SIZE);
                phy_block_nr = testfs_alloc_block_for_inode(in);
                if (phy_block_nr < 0)
                {
                    //Not allocate successfully, Clear all allocation
                    if(dindirect_allocated == 1)
                    {
                        //Need to clear the dindirect block
                        testfs_free_block_from_inode(in, in->in.i_dindirect);
                        in->in.i_dindirect = 0;
                    }
			return phy_block_nr;
                }
                indirect_allocated = 1;
                ((int *)dindirect)[Index] = phy_block_nr;
            }
            //Now, dindirect holds double indirect block, indirect holds indirect block
            //Allocate the direct block, first check if that block is existed.
            assert(((int *)indirect)[Index2] == 0);	
            phy_block_nr = testfs_alloc_block_for_inode(in);
            if (phy_block_nr >= 0) 
            {
		/* Update the indirect and double indirect blocks */
		((int *)indirect)[Index2] = phy_block_nr;
		write_blocks(in->sb, indirect, ((int *)dindirect)[Index], 1);
                write_blocks(in->sb, dindirect, in->in.i_dindirect, 1);
            }
            //If not allocate successfully
            else
            {
                //See if the double indirect block is allocated
                if(dindirect_allocated == 1)
                {
                    //This is the case that double indirect block was allocated, so we need to clear 2 levels of block
                    testfs_free_block_from_inode(in, ((int *)dindirect)[Index]);
                    ((int *)dindirect)[Index] = 0;
                    testfs_free_block_from_inode(in, in->in.i_dindirect);
                    in->in.i_dindirect = 0;
                }
                else if(indirect_allocated == 1)
                {
                    //This is the case that only indirect block was allocated since dindirect_allocated != 1;
                    testfs_free_block_from_inode(in, ((int *)dindirect)[Index]);
                    ((int *)dindirect)[Index] = 0;
                }
            }
            return phy_block_nr;
        }
        

	if (in->in.i_indirect == 0) {	/* allocate an indirect block */
		bzero(indirect, BLOCK_SIZE);
		phy_block_nr = testfs_alloc_block_for_inode(in);
		if (phy_block_nr < 0)
			return phy_block_nr;
		indirect_allocated = 1;
		in->in.i_indirect = phy_block_nr;
	} else {	/* read indirect block */
		read_blocks(in->sb, indirect, in->in.i_indirect, 1);
	}

	/* allocate direct block */
	assert(((int *)indirect)[log_block_nr] == 0);	
	phy_block_nr = testfs_alloc_block_for_inode(in);

	if (phy_block_nr >= 0) {
		/* update indirect block */
		((int *)indirect)[log_block_nr] = phy_block_nr;
		write_blocks(in->sb, indirect, in->in.i_indirect, 1);
	} else if (indirect_allocated) {
		/* free the indirect block that was allocated */
		testfs_free_block_from_inode(in, in->in.i_indirect);
	}
	return phy_block_nr;
}

int
testfs_write_data(struct inode *in, const char *buf, off_t start, size_t size)
{
	char block[BLOCK_SIZE];
	long block_nr = start / BLOCK_SIZE;
	long block_ix = start % BLOCK_SIZE;
	int ret;
        int flag;
        size_t Limit = 34376597504;
        flag = 0;
        if (size > (Limit - start))
        {
            size = (Limit - start);
            flag = 1;
        }
	if (block_ix + size > BLOCK_SIZE) {
            long end_nr = (start + size) / BLOCK_SIZE;
            long end_ix = (start + size) % BLOCK_SIZE;
            long middle_nr = end_nr - block_nr;
            
            if (end_nr >0 && end_ix == 0)
            {
                end_ix = BLOCK_SIZE;
                end_nr = end_nr -1;
            }
            int i;
            //First deal with the first block
            ret = testfs_allocate_block(in, block_nr, block);
            if (ret < 0)
		return ret;
            memcpy(block + block_ix, buf, BLOCK_SIZE - block_ix);
            write_blocks(in->sb, block, ret, 1);
            buf = buf + (BLOCK_SIZE - block_ix);
            //Then is the middle case
            for(i = 1; i < middle_nr; i++)
            {
                ret = testfs_allocate_block(in, block_nr + i, block);
                if (ret < 0)
                    return ret;
                memcpy(block, buf, BLOCK_SIZE);
                write_blocks(in->sb, block, ret, 1);
                buf = buf + BLOCK_SIZE;
            }
            //Ending case
            ret = testfs_allocate_block(in, end_nr, block);
            if (ret < 0)
		return ret;
            memcpy(block, buf, end_ix);
            write_blocks(in->sb, block, ret, 1);
	}
        else{
            /* ret is the newly allocated physical block number */
            ret = testfs_allocate_block(in, block_nr, block);
            if (ret < 0)
            	return ret;
            memcpy(block + block_ix, buf, size);
            write_blocks(in->sb, block, ret, 1);
            /* increment i_size by the number of bytes written. */
        }
	if (size > 0)
		in->in.i_size = MAX(in->in.i_size, start + (off_t) size);
	in->i_flags |= I_FLAGS_DIRTY;
        
        if(flag == 1)
            return -EFBIG;
	/* return the number of bytes written or any error */
	return size;
}

int
testfs_free_blocks(struct inode *in)
{
	int i,j;
	int e_block_nr;

	/* last block number */
	e_block_nr = DIVROUNDUP(in->in.i_size, BLOCK_SIZE);

	/* remove direct blocks */
	for (i = 0; i < e_block_nr && i < NR_DIRECT_BLOCKS; i++) {
		if (in->in.i_block_nr[i] == 0)
			continue;
		testfs_free_block_from_inode(in, in->in.i_block_nr[i]);
		in->in.i_block_nr[i] = 0;
	}
	e_block_nr -= NR_DIRECT_BLOCKS;

	/* remove indirect blocks */
	if (in->in.i_indirect > 0) {
		char block[BLOCK_SIZE];
		read_blocks(in->sb, block, in->in.i_indirect, 1);
		for (i = 0; i < e_block_nr && i < NR_INDIRECT_BLOCKS; i++) {
			testfs_free_block_from_inode(in, ((int *)block)[i]);
			((int *)block)[i] = 0;
		}
		testfs_free_block_from_inode(in, in->in.i_indirect);
		in->in.i_indirect = 0;
	}

	e_block_nr -= NR_INDIRECT_BLOCKS;
	if (e_block_nr >= 0 && in->in.i_dindirect != 0) {
            
            char Indirect[BLOCK_SIZE];
            char Dindirect[BLOCK_SIZE];
            read_blocks(in->sb, Dindirect, in->in.i_dindirect, 1);
                for(i = 0; i < NR_INDIRECT_BLOCKS; i++)
                {
                    if(((int *)Dindirect)[i] > 0)
                    {
                        read_blocks(in->sb, Indirect, ((int *)Dindirect)[i], 1);
                        for(j = 0;j < NR_INDIRECT_BLOCKS; j++)
                        {
                            if(((int *)Indirect)[j] != 0)
                            {
                                testfs_free_block_from_inode(in, ((int *)Indirect)[j]);
                                ((int *)Indirect)[j] = 0;
                            }
                        }
                        testfs_free_block_from_inode(in, ((int *)Dindirect)[i]);
                        ((int *)Dindirect)[i] = 0;
                    }
                }
            testfs_free_block_from_inode(in, in->in.i_dindirect);
            in->in.i_dindirect = 0;
            
        }
	in->in.i_size = 0;
	in->i_flags |= I_FLAGS_DIRTY;
	return 0;
}
