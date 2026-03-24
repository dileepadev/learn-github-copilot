"""Tests for examples/python/basics.py"""

import pytest
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from basics import factorial, is_palindrome, most_frequent, celsius_to_fahrenheit, flatten


def test_factorial_base_cases():
    assert factorial(0) == 1
    assert factorial(1) == 1


def test_factorial_positive():
    assert factorial(5) == 120
    assert factorial(6) == 720


def test_factorial_negative_raises():
    with pytest.raises(ValueError):
        factorial(-1)


def test_is_palindrome_true():
    assert is_palindrome("racecar") is True
    assert is_palindrome("A man a plan a canal Panama".replace(" ", "")) is True


def test_is_palindrome_false():
    assert is_palindrome("hello") is False


def test_is_palindrome_case_insensitive():
    assert is_palindrome("Racecar") is True


def test_is_palindrome_with_spaces():
    assert is_palindrome("race car") is True


def test_most_frequent_basic():
    assert most_frequent([1, 2, 2, 3, 3, 3]) == 3


def test_most_frequent_single():
    assert most_frequent([42]) == 42


def test_most_frequent_empty():
    assert most_frequent([]) is None


def test_celsius_to_fahrenheit_freezing():
    assert celsius_to_fahrenheit(0) == 32.0


def test_celsius_to_fahrenheit_boiling():
    assert celsius_to_fahrenheit(100) == 212.0


def test_celsius_to_fahrenheit_body_temp():
    assert abs(celsius_to_fahrenheit(37) - 98.6) < 0.1


def test_flatten_nested():
    assert flatten([1, [2, [3, 4]], 5]) == [1, 2, 3, 4, 5]


def test_flatten_already_flat():
    assert flatten([1, 2, 3]) == [1, 2, 3]


def test_flatten_empty():
    assert flatten([]) == []
