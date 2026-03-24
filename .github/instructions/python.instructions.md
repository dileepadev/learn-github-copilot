---
applyTo: "examples/python/**/*.py"
---

# Python Coding Instructions

## Style
- Follow PEP 8 for all Python code.
- Use 4-space indentation.
- Limit lines to 88 characters (Black-compatible style, though Black is not enforced as a build step).
- Use f-strings for string formatting instead of `%` or `.format()`.

## Docstrings
- Every public function must have a docstring using the following format:
  ```python
  def my_function(arg: type) -> return_type:
      """One-line summary.

      Args:
          arg: Description of the argument.

      Returns:
          Description of the return value.

      Raises:
          ValueError: If arg is invalid.
      """
  ```

## Type Hints
- Add type hints to all function signatures.

## Testing (pytest)
- Test files live in `examples/python/tests/` and must be named `test_*.py`.
- Use `pytest` for all tests. Run with: `python -m pytest examples/python/tests/ -v`
- Each function needs at minimum: one typical case, one edge case, and one error case.
- Use `pytest.raises` for exception tests.

## Imports
- Use absolute imports from the `examples/python/` directory.
- Configure paths via `conftest.py` or `pyproject.toml` rather than mutating `sys.path` in test files.
