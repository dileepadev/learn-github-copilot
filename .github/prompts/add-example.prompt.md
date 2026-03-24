---
description: "Scaffold a new utility example following the conventions of this repository"
argument-hint: "Describe the utility function(s) you want to add and the language (python or javascript)"
---

Add a new utility function to this repository following the existing conventions.

## Steps

1. **Choose the language**: Python (`examples/python/basics.py`) or JavaScript (`examples/javascript/basics.js`).
2. **Add the function** to the appropriate file:
   - Python: include a docstring and type hints; append a demo line to the `if __name__ == "__main__"` block.
   - JavaScript: include a JSDoc comment; append a demo line to the `if (require.main === module)` block; add it to `module.exports`.
3. **Add unit tests** in the corresponding test file using the same helper/framework already in use.
   - At minimum: one typical case, one edge case, one error/invalid-input case.
4. **Run the tests** to confirm they pass:
   - Python: `python -m pytest examples/python/tests/ -v`
   - JavaScript: `node examples/javascript/tests/test_basics.js`
5. **Update the README.md** examples table if a new file is created.

## Function Description

${input:description:Describe the function(s) to add, e.g. "a Python function that checks if a number is a perfect square"}
