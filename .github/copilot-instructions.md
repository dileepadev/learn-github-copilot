# GitHub Copilot Repository Instructions

## Project Overview

This is **learn-github-copilot** – a reference project for exploring and demonstrating GitHub Copilot capabilities. It contains utility function examples in Python and JavaScript, unit tests for those examples, and documentation to help developers learn how to use Copilot effectively.

## Repository Layout

```
learn-github-copilot/
├── .github/
│   ├── copilot-instructions.md        # This file – repo-wide Copilot instructions
│   ├── instructions/
│   │   ├── python.instructions.md     # Path-specific instructions for Python files
│   │   └── javascript.instructions.md # Path-specific instructions for JavaScript files
│   └── prompts/
│       ├── generate-tests.prompt.md   # Reusable prompt: generate unit tests
│       └── add-example.prompt.md      # Reusable prompt: scaffold a new example
├── examples/
│   ├── python/
│   │   ├── basics.py                  # Python utility functions
│   │   └── tests/test_basics.py       # pytest tests
│   └── javascript/
│       ├── basics.js                  # JavaScript utility functions
│       └── tests/test_basics.js       # Node.js tests (built-in runner)
├── AGENTS.md                          # Agentic workflow instructions
├── CONTRIBUTING.md                    # Contribution guidelines
└── README.md                          # Project overview
```

## Languages and Runtimes

- **Python 3.12+** – Examples in `examples/python/`
- **Node.js 17+** – Examples in `examples/javascript/` (requires `structuredClone`)

## Build and Test Commands

### Python
```bash
# Run all Python tests
python -m pytest examples/python/tests/ -v

# Run the examples script directly
python examples/python/basics.py
```

### JavaScript
```bash
# Run all JavaScript tests (no extra dependencies required)
node examples/javascript/tests/test_basics.js

# Run the examples script directly
node examples/javascript/basics.js
```

## Coding Standards

- **Python**: Follow PEP 8; include a docstring for every public function.
- **JavaScript**: Use 2-space indentation; use `const`/`let` (never `var`); add a JSDoc comment for exported functions.
- All utility functions must have corresponding unit tests.
- Do not introduce external dependencies without updating `README.md` and the install instructions.

## Copilot Workflow Notes

- When adding a new utility function, also add it to the `if __name__ == "__main__"` (Python) or `if (require.main === module)` (JavaScript) demo block.
- When adding a new function, always add at least three unit tests: a typical case, an edge case, and an error/empty-input case.
- Reusable prompts for common tasks are in `.github/prompts/`. Use them in Copilot Chat by typing `/` followed by the prompt file name.
