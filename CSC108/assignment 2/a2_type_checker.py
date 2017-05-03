import builtins
import stress_and_rhyme_functions

# Check for use of functions print and input.

our_print = print
our_input = input


def disable_print(*args):
    raise Exception("You must not call built-in function print!")


def disable_input(*args):
    raise Exception("You must not call built-in function input!")

builtins.print = disable_print
builtins.input = disable_input


# Type checks and simple checks for stress_and_rhyme_functions module

# A small pronouncing table that can be used in docstring examples.
SMALL_TABLE = [['A', 'BOX', 'CONSISTENT', 'DON\'T', 'FOX', 'IN', 'SOCKS'],
               [['AH0'],
                ['B', 'AA1', 'K', 'S'],
                ['K', 'AH0', 'N', 'S', 'IH1', 'S', 'T', 'AH0', 'N', 'T'],
                ['D', 'OW1', 'N', 'T'],
                ['F', 'AA1', 'K', 'S'],
                ['IH0', 'N'],
                ['S', 'AA1', 'K', 'S']]]

# Type check and simple check stress_and_rhyme_functions.get_word
result = stress_and_rhyme_functions.get_word('BOX  B AA1 K S')
assert isinstance(result, str), \
    '''stress_and_rhyme_functions.get_word should return a str,''' \
    ''' but returned {0}.'''.format(type(result))
assert result, \
    '''stress_and_rhyme_functions.get_word('BOX  B AA1 K S')''' \
    ''' should return 'BOX', but ''' \
    '''returned {0}.'''.format(result)

# Type check and simple check stress_and_rhyme_functions.get_pronunciation
result = stress_and_rhyme_functions.get_pronunciation('BOX  B AA1 K S')
assert isinstance(result, list), \
    """stress_and_rhyme_functions.get_pronunciation should return a list,""" \
    """ but returned {0}.""".format(type(result))
assert result == ['B', 'AA1', 'K', 'S'], \
    """stress_and_rhyme_functions.get_pronunciation('BOX  B AA1 K S')""" \
    """ should return ['B', 'AA1', 'K', 'S'] but """ \
    """returned {0}.""".format(result)

# Type check and simple check stress_and_rhyme_functions.make_pronouncing_table
result = stress_and_rhyme_functions.make_pronouncing_table(['BOX  B AA1 K S'])
assert isinstance(result, list), \
    """stress_and_rhyme_functions.make_pronouncing_table should return a list,""" \
    """ but returned {0}.""".format(type(result))
assert result == [['BOX'], [['B', 'AA1', 'K', 'S']]], \
    """stress_and_rhyme_functions.make_pronouncing_table(['BOX  B AA1 K S'])""" \
    """ should return [['BOX'], [['B', 'AA1', 'K', 'S']]] but """ \
    """returned {0}.""".format(result)

# Type check and simple check stress_and_rhyme_functions.look_up_pronunciation
result = stress_and_rhyme_functions.look_up_pronunciation("Don't!", SMALL_TABLE)
assert isinstance(result, list), \
    """stress_and_rhyme_functions.look_up_pronunciation should return a list,""" \
    """ but returned {0}.""".format(type(result))
assert result == ['D', 'OW1', 'N', 'T'], \
    """stress_and_rhyme_functions.look_up_pronunciation("Don't!", SMALL_TABLE)""" \
    """ should return ['D', 'OW1', 'N', 'T'] but """ \
    """returned {0}.""".format(result)

# Type check and simple check stress_and_rhyme_functions.is_vowel_phoneme
result = stress_and_rhyme_functions.is_vowel_phoneme("AE0")
assert isinstance(result, bool), \
    """stress_and_rhyme_functions.is_vowel_phoneme should return a bool,""" \
    """ but returned {0}.""".format(type(result))
assert result == True, \
    """stress_and_rhyme_functions.is_vowel_phoneme("AE0")""" \
    """ should return True but """ \
    """returned {0}.""".format(result)

# Type check and simple check stress_and_rhyme_functions.last_syllable
result = stress_and_rhyme_functions.last_syllable(['D', 'OW1', 'N', 'T'])
assert isinstance(result, list), \
    """stress_and_rhyme_functions.last_syllable should return a list,""" \
    """ but returned {0}.""".format(type(result))
assert result == ['OW1', 'N', 'T'], \
    """stress_and_rhyme_functions.last_syllable(['D', 'OW1', 'N', 'T'])""" \
    """ should return ['OW1', 'N', 'T'] but """ \
    """returned {0}.""".format(result)

# Type check and simple check stress_and_rhyme_functions.convert_to_lines
result = stress_and_rhyme_functions.convert_to_lines('\nOne,\n\n\ntwo,\nthree.\n\n')
assert isinstance(result, list), \
    """stress_and_rhyme_functions.convert_to_lines should return a list,""" \
    """ but returned {0}.""".format(type(result))
assert result == ['One,', '', 'two,', 'three.'], \
    """stress_and_rhyme_functions.convert_to_lines('\nOne,\n\n\ntwo,\nthree.\n\n'])""" \
    """ should return ['One,', '', 'two,', 'three.'] but """ \
    """returned {0}.""".format(result)

# Type check and simple check stress_and_rhyme_functions.detect_rhyme_scheme
result = stress_and_rhyme_functions.detect_rhyme_scheme(['BOX','FOX'], SMALL_TABLE)
assert isinstance(result, list), \
    """stress_and_rhyme_functions.detect_rhyme_scheme should return a list,""" \
    """ but returned {0}.""".format(type(result))
assert result == ['A', 'A'], \
    """stress_and_rhyme_functions.detect_rhyme_scheme(['BOX','FOX'], SMALL_TABLE)""" \
    """ should return ['A', 'A'] but """ \
    """returned {0}.""".format(result)

# Type check and simple check stress_and_rhyme_functions.get_stress_pattern
result = stress_and_rhyme_functions.get_stress_pattern('consistent', SMALL_TABLE)
assert isinstance(result, str), \
    """stress_and_rhyme_functions.get_stress_pattern should return a str,""" \
    """ but returned {0}.""".format(type(result))
assert result == 'x / x     ', \
    """stress_and_rhyme_functions.get_stress_pattern('consistent', SMALL_TABLE)""" \
    """ should return 'x / x     ' but """ \
    """returned {0}.""".format(result)

builtins.print = our_print
builtins.input = our_input 

print("""

The type checker passed.

This means that the functions in stress_and_rhyme_functions.py:
- are named correctly,
- take the correct number of arguments, and
- return the correct types.

This does NOT mean that the functions are correct!

Run the doctests to execute one test case per required
stress_and_rhyme_functions.py function.

Be sure to thoroughly test your functions yourself before submitting.
""")
