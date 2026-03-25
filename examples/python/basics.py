"""
GitHub Copilot Basics - Python Examples

This file demonstrates how GitHub Copilot can generate Python code from
natural language comments. Each section shows a prompt (comment) and the
code Copilot helped produce.
"""


# --- Example 1: Calculate the factorial of a number ---

def factorial(n):
    """Return the factorial of a non-negative integer n."""
    if n < 0:
        raise ValueError("n must be a non-negative integer")
    if n == 0:
        return 1
    return n * factorial(n - 1)


# --- Example 2: Check if a string is a palindrome ---

def is_palindrome(s):
    """Return True if the string s is a palindrome, ignoring case and spaces."""
    cleaned = s.replace(" ", "").lower()
    return cleaned == cleaned[::-1]


# --- Example 3: Find the most frequent element in a list ---

def most_frequent(items):
    """Return the element that appears most frequently in the list."""
    if not items:
        return None
    return max(set(items), key=items.count)


# --- Example 4: Convert Celsius to Fahrenheit ---

def celsius_to_fahrenheit(celsius):
    """Convert a temperature from Celsius to Fahrenheit."""
    return celsius * 9 / 5 + 32


# --- Example 5: Flatten a nested list ---

def flatten(nested):
    """Recursively flatten a nested list into a single list."""
    result = []
    for item in nested:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result


if __name__ == "__main__":
    print(factorial(5))                        # 120
    print(is_palindrome("racecar"))            # True
    print(most_frequent([1, 2, 2, 3, 3, 3]))  # 3
    print(celsius_to_fahrenheit(100))          # 212.0
    print(flatten([1, [2, [3, 4]], 5]))        # [1, 2, 3, 4, 5]
