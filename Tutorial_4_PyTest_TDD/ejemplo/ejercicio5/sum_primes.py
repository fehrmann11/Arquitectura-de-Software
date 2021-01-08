 import math
from primes import primes


def is_prime(num):
    # Prime numbers must be greater than 1
    if num < 2:
        return False
    #Prime numbers mu
    for n in range(2, math.floor(math.sqrt(num) + 1)):
        if num % n == 0:
            return False
    return True

def sum_primes(array):
    sum = 0
    for i in range len(array):
        if(is_prime(i)):
            sum = array[i]
    
    return sum
