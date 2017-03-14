map <- matrix (c (
  " ", "X", " ", " ",
  "X", " ", "X", " ",
  "X", " ", "X", " ",
  " ", " ", " ", " ",
  " ", " ", " ", " "),
  nrow=5, ncol=4, byrow = TRUE)

find_distances <- function (map, target){
  Queue <- matrix(Inf, nrow(map), ncol(map))
  result <- matrix(Inf, nrow(map), ncol(map))
  result[target[1],target[2]] <- 0
  if(map[target[1],target[2]] == "X")
    return(result)
  Queue[target[1],target[2]] <- 0
  for(i in 1:nrow(map)){
    for(j in 1:ncol(map)){
      if(map[i,j] == "X")
        Queue[i,j] <- -1
    }
  }
  i <- 1
  point <- 0
  distance <- 0
  flag <- FALSE
  while(!flag){
    flag <- TRUE
    for(i in 1:length(Queue)){
      if(distance >= Queue[i] && Queue[i] >= 0)
      {
        distance <- Queue[i]
        point <- i
        flag <- FALSE
      }
    }
    if(flag == TRUE)
      break;
    #record data to final matrix: result.
    result[point] <- distance
    #Remove the current point from the "Undiscovered" queue
    Queue[point] <- -1
    #Now we have the smallest distance point. We need to find distance for its near blocks
    #up:point-1; down:point+1; left:point-nrow(Queue); right:point+nrow(Queue)
    #Need to be careful if there is any out of range point.
    if((point%%nrow(Queue) != 1) && Queue[point-1]>=0 && Queue[point-1]>(distance+1))
      Queue[point-1] <- distance+1
    if((point%%nrow(Queue) != 0) && Queue[point+1]>=0 && Queue[point+1]>(distance+1))
      Queue[point+1] <- distance+1
    if(point-nrow(Queue) > 0 && Queue[point-nrow(Queue)]>=0 && Queue[point-nrow(Queue)]>(distance+1))
      Queue[point-nrow(Queue)] <- distance+1
    if(point+nrow(Queue) <= length(Queue)&& Queue[point+nrow(Queue)]>=0 && Queue[point+nrow(Queue)]>(distance+1))
      Queue[point+nrow(Queue)] <- distance+1
    #Since the cost of every move is 1, so we increase the distance by 1 everytime 
    distance <- distance +1
    
  }
  result
}
