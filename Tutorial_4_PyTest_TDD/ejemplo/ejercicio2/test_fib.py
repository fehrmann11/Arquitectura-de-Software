import pytest



@pytest.fixture
def fib():
    n = 20
    array = [0,1]
    for i in range(2,n):
        array.append(array[i-1]+array[i-2])
    return array


def test_fib(fib):
    assert fib[5]== 5


def test_fib_falla(fib):
    assert fib[6] == 10