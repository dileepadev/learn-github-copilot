# Agent Instructions

This file provides instructions for AI coding agents (GitHub Copilot agent mode, etc.) working in this repository.

## Repository Summary

`learn-github-copilot` is a reference project that demonstrates GitHub Copilot capabilities through runnable Python and JavaScript utility examples, their unit tests, and supporting documentation.

## Validated Commands

Before opening a pull request, run the following commands and confirm they all succeed:

```bash
# Python tests
python -m pytest examples/python/tests/ -v

# JavaScript tests
node examples/javascript/tests/test_basics.js
```

Both commands must exit with code 0.

## Adding Code

- New Python functions go in `examples/python/basics.py`; tests in `examples/python/tests/test_basics.py`.
- New JavaScript functions go in `examples/javascript/basics.js`; tests in `examples/javascript/tests/test_basics.js`.
- Refer to `.github/copilot-instructions.md` for coding standards.
- Use `.github/prompts/add-example.prompt.md` when scaffolding a new example.
- Use `.github/prompts/generate-tests.prompt.md` when generating tests for existing code.

## Do Not

- Introduce external npm or pip packages without updating `README.md`.
- Commit build artifacts (`__pycache__/`, `.pytest_cache/`, `node_modules/`) — they are in `.gitignore`.
