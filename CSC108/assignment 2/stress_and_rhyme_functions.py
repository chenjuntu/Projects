# The main module - need to import so that window code works correctly
import annotate_poetry

NO_STRESS_SYMBOL = 'x'
PRIMARY_STRESS_SYMBOL = '/'
SECONDARY_STRESS_SYMBOL = '\\'  # note: len('\\') == 1 due to special character

"""
A pronouncing table: a nested list, [list of str, list of list of str]
  o a two item list, contains two parallel lists
  o the first item is a list of words (each item in this sublist is a str
    for which str.isupper() is True)
  o the second item is a list of pronunciations, where a pronunciation is a 
    list of phonemes (each item in this sublist is a list of str) 
  o the pronunciation for the word at index i in the list of words is at index
    i in the list of pronunciations
"""

"""
############################## DEBUG #########################################
OUR_PRONOUNCING_DICTIONARY = 'our_dictionary.txt'

def read_pronouncing_dictionary(filename):
    pronouncing_dictionary_file = open(filename, 'r')
    
    # Skip the header lines in the pronouncing dictionary.
    line = pronouncing_dictionary_file.readline()
    while line.startswith(';;;'):
        line = pronouncing_dictionary_file.readline()
 
    # Read pronouncing information and put in table form
    pronouncing_lines = pronouncing_dictionary_file.readlines()
    pronouncing_table = make_pronouncing_table(pronouncing_lines)
    
    return pronouncing_table

##############################################################################
"""


# A small pronouncing table that can be used in docstring examples.
SMALL_TABLE = [['A', 'BOX', 'CONSISTENT', 'DON\'T', 'FOX', 'IN', 'SOCKS'],
				[['AH0'],
                ['B', 'AA1', 'K', 'S'],
                ['K', 'AH0', 'N', 'S', 'IH1', 'S', 'T', 'AH0', 'N', 'T'],
                ['D', 'OW1', 'N', 'T'],
                ['F', 'AA1', 'K', 'S'],
                ['IH0', 'N'],
                ['S', 'AA1', 'K', 'S']]]

# A small poem that can be used in docstring examples.
SMALL_POEM = "\nI'll sit here instead,\n\n\n\nA cloud on my head\n\n"

"""
A pronouncing dictionary is a list of pronouncing lines, where a pronouncing
line is a line in the CMU Pronouncing Dictionary format: 
  a word followed by the phonemes describing how to pronounce the word.
  o example:
    BOX  B AA1 K S
"""

# A small pronouncing dictionary that can be used in docstring examples.
SMALL_PRONOUNCING_DICT = [
    'A AH0',
    'BOX B AA1 K S',
    'CONSISTENT K AH0 N S IH1 S T AH0 N T',
    'DON\'T D OW1 N T',
    'FOX F AA1 K S',
    'IN IH0 N',
    'SOCKS S AA1 K S']


# ===================== Provided Helper Functions =============================

def prepare_word(s):
    """ (str) -> str

    Return a new string based on s in which all letters have been converted to 
    uppercase and punctuation characters have been stripped from both ends. 
    Inner punctuation is left unchanged.
    
    This function prepares a word for looking up in a pronouncing table.

    >>> prepare_word('Birthday!!!')
    'BIRTHDAY'
    >>> prepare_word('"Quoted?"')
    'QUOTED'
    >>> prepare_word("Don't!")
    "DON'T"
    """

    punctuation = """!"`@$%^&_+-={}|\\/—,;:'.-?)([]<>*#\n\t\r"""
    result = s.upper().strip(punctuation)
    return result


def get_rhyme_scheme_letter(offset):
    """ (int) -> str

    Precondition: 0 <= offset <= 25

    Return the letter corresponding to the offset from 'A'.  Helpful when 
    labelling a poem with its rhyme scheme.

    >>> get_rhyme_scheme_letter(0)
    'A'
    >>> get_rhyme_scheme_letter(25)
    'Z'
    """

    return chr(ord('A') + offset)


# ======== Students: Add Any Helper Functions Below This Line ================


# ======== Students: Add Any Helper Functions Above This Line ================

# ======== Students: Add One Docstring Example And Function ===================
# ========           Body Code To Each Function Below       ===================

def get_word(pronouncing_line):
    """ (str) -> str

    Precondition: pronouncing_line has the form:
                  WORD  PHONEME_1 PHONEME_2 ... PHONEME_LAST

    Return the word in pronouncing_line.

    >>> get_word('ABALONE  AE2 B AH0 L OW1 N IY0')
    'ABALONE'
    """
    
    # To do: Add one docstring example above and fill in this function's
    #        body to meet its specification.
    return (pronouncing_line.split())[0]

def get_pronunciation(pronouncing_line):
    """ (str) -> list of str

    Precondition: pronouncing_line has the form:
                  WORD  PHONEME_1 PHONEME_2 ... PHONEME_LAST

    Return a list containing the phonemes in pronouncing_line.

    >>> get_pronunciation('ABALONE  AE2 B AH0 L OW1 N IY0')
    ['AE2', 'B', 'AH0', 'L', 'OW1', 'N', 'IY0']
    """

    # To do: Add one docstring example above and fill in this function's
    #        body to meet its specification.
    Temp = pronouncing_line.split()
    A = Temp.pop(0)
    return Temp

def make_pronouncing_table(pronouncing_list):
    """ (list of str) -> pronouncing table

    Precondition: pronouncing_list is a list of pronouncing lines.  
                  Each pronuncing line has the form:
                  WORD  PHONEME_1 PHONEME_2 ... PHONEME_LAST

    Return a pronouncing table for the data in pronouncing_list.

    >>> SMALL_TABLE == make_pronouncing_table(SMALL_PRONOUNCING_DICT)
    True
    """

    # To do: Add one docstring example above and fill in this function's
    #        body to meet its specification.
    Words = []  #This list is used for holding words
    Sounds = [] #This list is used to hold pronouncing lines
    for i in range(len(pronouncing_list)):
        Words.insert(i,get_word(pronouncing_list[i]))
        Sounds.insert(i, get_pronunciation(pronouncing_list[i]))
    Table = [Words, Sounds]
    return Table


def look_up_pronunciation(word, pronouncing_table):
    """ (str, pronouncing table) -> list of str

    Return the list of phonemes for pronouncing word, as found in
    pronouncing_table.  Ignore the leading and trailing punctuation in word
    as well as the case of any letters in word.

    >>> pronouncing_table = SMALL_TABLE
    >>> look_up_pronunciation("Don't!", pronouncing_table)
    ['D', 'OW1', 'N', 'T']
    """

    # To do: Add one docstring example above and fill in this function's
    #        body to meet its specification.
    word = prepare_word(word)
    Index = pronouncing_table[0].index(word)
    return pronouncing_table[1][Index]
    

def is_vowel_phoneme(s):
    """ (str) -> bool

    Return True if and only if s is a vowel phoneme.  Vowel phonemes are three 
    character strings that start with two uppercase letters and end with a 
    single digit of 0, 1 or 2.  The first uppercase letter must be one of 
    A, E, I, O or U.

    >>> is_vowel_phoneme("AE0")
    True
    """

    # To do: Add one docstring example above and fill in this function's
    #        body to meet its specification.
    #First,if statement to decide if first character belongs to AEIOU. Then decide if the last character is 0~2
    if(len(s) == 3):
        if s[0] == 'A' or s[0] == 'E' or s[0] == 'I' or s[0] == 'O' or s[0] == 'U':
            if int(s[2]) >= 0 and int(s[2]) <= 2:
                return True
    return False

def last_syllable(phoneme_list):
    """ (list of str) -> list of str

    Return the last vowel phoneme and any subsequent consonant phoneme(s) from
    phoneme_list, in the same order as they appear in phoneme_list.

    >>> last_syllable(['K', 'AH0', 'N', 'S', 'IH1', 'S', 'T', 'AH0', 'N', 'T'])
    ['AH0', 'N', 'T']
    """

    # To do: Add one docstring example above and fill in this function's
    #        body to meet its specification.
    Index_hold = 0
    for i in range(len(phoneme_list)):
        if is_vowel_phoneme(phoneme_list[i]):
            Index_hold = i
    return phoneme_list[Index_hold:]
            

# Interested in why the next docstring starts with an r?
# See section 2.4.1:
# https://docs.python.org/3.4/reference/lexical_analysis.html

def convert_to_lines(poem):
    r""" (str) -> list of str

    Return a list of the lines in poem, with leading and trailing whitespace
    removed from each poem line, and leading and trailing blank lines removed.
    Blank lines between stanzas are reduced to a single blank line.

    >>> convert_to_lines(SMALL_POEM)
    ["I'll sit here instead,", '', 'A cloud on my head']
    """

    # To do: Add one docstring example above and fill in this function's
    #        body to meet its specification.
    poem = poem.split("\n")
    Count_del = 0
    while (poem[0] == ''):
        Dummy = poem.pop(0)
    while (poem[len(poem)-1] == ''):
        Dummy = poem.pop()
    for i in range(len(poem)):
        if(poem[i] == ''):
            if(poem[i+1] == ''):
                poem[i] = -999
                Count_del = Count_del + 1
    for i in range(len(poem)):
        if type(poem[i]) is str and len(poem[i]) > 0 and poem[i].find(" ") != -1:
            Done_flag = False
            while Done_flag == False and poem[i].find(" ") == 0:
                if len(poem[i]) == 1:
                    Done_flag = True
                    poem[i] = -999
                    Count_del = Count_del + 1
                else:
                    poem[i] = poem[i][1:]
            while type(poem[i]) is str and len(poem[i]) > 1 and poem[i][len(poem[i])-1] == " ":
                poem[i] = poem[i][:len(poem[i])-1]
    while Count_del > 0:
        poem.remove(-999)
        Count_del = Count_del - 1
    return poem

def detect_rhyme_scheme(poem_lines, pronouncing_table):
    """ (list of str, pronouncing table) -> list of str

    Return a list of single characters indicating the rhyme scheme for 
    poem_lines, with blank lines that separate stanzas given the rhyme scheme 
    marker ' '.  The marker for the first line in the poem is 'A'. When 
    annotating the rhyme scheme in a poem, consecutive uppercase letters are 
    used, starting with the letters A, B, C, etc

    >>> pronouncing_table = SMALL_TABLE
    >>> poem_lines = ["Don't, in box!", '', 'Fox in socks.', 'Consistent.']
    >>> detect_rhyme_scheme(poem_lines, pronouncing_table)
    ['A', ' ', 'A', 'B']
    """

    # To do: Add one docstring example above and fill in this function's
    #        body to meet its specification.
    #look_up_pronunciation first, then use the pronunciation to look for last_syllable, and then compare. 
    #Construct a list to hold last_syllable, index number can find ABC
    Result = []
    pronunciation_list = []
    for j in range(len(poem_lines)):
        Result.insert(0,0)
        pronunciation_list.insert(0,0)
    for i in range(len(poem_lines)):
        if poem_lines[i] == '':
            Result[i] = ' '
        else:
            Temp = poem_lines[i].split()
            Pronuciation = look_up_pronunciation(Temp[len(Temp) - 1], pronouncing_table)
            Pronuciation = last_syllable(Pronuciation)
            Found_same = False
            k = 0
            while (k < len(pronunciation_list) and pronunciation_list[k] != 0 and Found_same == False):
                if Pronuciation == pronunciation_list[k]:
                    Found_same = True
                    Result[i] = get_rhyme_scheme_letter(k)
                k = k + 1
            if Found_same == False:
                pronunciation_list[k] = Pronuciation
                Result[i] = get_rhyme_scheme_letter(k)
    return (Result)

def get_stress_pattern(word, pronouncing_table):
    """ (str, pronouncing table) -> str

    Return the stress pattern for pronouncing word using the pronouncing table 
    pronouncing_table.  Separate each stress symbol in the stress pattern by a
    single space, and pad the end of the stress pattern with spaces to make
    the length of the stress pattern the same as the length of word. 

    The stress symbols are given by the defined constants NO_STRESS_SYMBOL,
    PRIMARY_STRESS_SYMBOL, and SECONDARY_STRESS_SYMBOL, which correspond to
    the lexical stress markers 0, 1 and 2, respectively.

    The docstring examples assume NO_STRESS_SYMBOL = 'x', 
    PRIMARY_STRESS_SYMBOL = '/' and SECONDARY_STRESS_SYMBOL = '\\'.

    >>> pronouncing_table = SMALL_TABLE
    >>> get_stress_pattern('consistent', pronouncing_table)
    'x / x     '
    """

    # To do: Add one docstring example above and fill in this function's
    #        body to meet its specification.
    Pronounciation = look_up_pronunciation(word, pronouncing_table)
    Vowel_list = []
    Result = ''
    for i in range(len(Pronounciation)-1, -1, -1):
        if is_vowel_phoneme(Pronounciation[i]):
            Vowel_list.insert(0,Pronounciation[i])
    for j in range(len(Vowel_list)):
        Temp = Vowel_list[j][2]
        Temp = int(Temp)
        if Temp == 0:
            Result = Result + 'x'
        elif Temp == 1:
            Result = Result + '/'
        else:
            Result = Result + '\\'
        if len(Result) < len(word): #Corner case. In case the last character is a symbol and make sure the space after symbol wouldn't make the Result longer than the word. 
            Result = Result + " "
    while (len(Result) < len(word)): #Pad the rest with spaces
        Result = Result + " "
    return Result

if __name__ == '__main__':
    import doctest
    doctest.testmod()
    
"""Test_string = 'ABALONE  AE2 B AH0 L OW1 N IY0'
print(get_word(Test_string))
print(get_pronunciation(Test_string))
print(is_vowel_phoneme('AE0'))
print(make_pronouncing_table(SMALL_PRONOUNCING_DICT))
print(look_up_pronunciation("Don't!", SMALL_TABLE))
print(last_syllable(['K', 'AH0', 'N', 'S', 'IH1', 'S', 'T', 'AH0', 'N', 'T']))
print(convert_to_lines(SMALL_POEM))
pronouncing_table = SMALL_TABLE
poem_lines = ["Don't, in box!", '', 'Fox in socks.', 'Consistent.']
print(detect_rhyme_scheme(poem_lines, pronouncing_table))
pronouncing_table = read_pronouncing_dictionary(OUR_PRONOUNCING_DICTIONARY)
print(get_stress_pattern("I", pronouncing_table))"""