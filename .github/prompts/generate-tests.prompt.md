---
description: "Generate comprehensive unit tests for a function or module in this repository"
argument-hint: "Paste the function(s) you want tests for, or reference a file path"
---

Generate comprehensive unit tests for the code provided below (or at the referenced path).

## Requirements

- Match the testing style already used in this repository:
  - **Python**: Use `pytest` in `examples/python/tests/test_*.py`
  - **JavaScript**: Use the hand-rolled `assert` helper in `examples/javascript/tests/test_*.js`
- Cover at minimum:
  1. A **typical/happy-path** case
  2. An **edge case** (e.g., empty input, zero, single element)
  3. An **error/invalid-input** case (exception raised or falsy return)
- Group tests by function name with a console label (JS) or descriptive test function names (Python).
- Do not add new test dependencies.

## Code to Test

${input:code:Paste or describe the function(s) to test here}
