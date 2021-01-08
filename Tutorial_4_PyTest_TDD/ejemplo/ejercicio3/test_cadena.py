import pytest

@pytest.fixture
def reverse():
    palabra="hola"
    return ' '.join(list(map(lambda x: x[::-1], palabra.split())))

def test_reverse(reverse):
    assert reverse == "aloh"