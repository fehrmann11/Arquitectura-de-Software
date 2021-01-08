from sum_primes import sum_primes

#Si introducimos 1, entonces no debe ser un número primo.
def test_prime_number():
    array = [1,2,3,4,5]
    assert sum_primes[array] == 9

