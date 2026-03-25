# Learn GitHub Copilot

This project is designed to explore and demonstrate the capabilities of GitHub Copilot. It includes examples, exercises, and demonstrations to help developers get the most out of AI-powered coding assistance.

## What is GitHub Copilot?

[GitHub Copilot](https://github.com/features/copilot) is an AI-powered coding assistant developed by GitHub and OpenAI. It helps developers write code faster by providing intelligent code completions, suggestions, and entire function implementations directly in the editor.

## Key Capabilities

- **Code Completion** – Suggests single lines or entire functions as you type
- **Code Generation** – Generates boilerplate, data structures, and algorithms from comments
- **Documentation** – Writes docstrings and inline comments automatically
- **Test Generation** – Creates unit tests for existing functions
- **Language Support** – Works across dozens of languages including Python, JavaScript, TypeScript, Go, Java, C#, and more

## Repository Structure

```
learn-github-copilot/
├── .github/
│   ├── copilot-instructions.md        # Repo-wide Copilot custom instructions
│   ├── instructions/
│   │   ├── python.instructions.md     # Path-specific instructions for Python
│   │   └── javascript.instructions.md # Path-specific instructions for JavaScript
│   └── prompts/
│       ├── generate-tests.prompt.md   # Reusable prompt: generate unit tests
│       └── add-example.prompt.md      # Reusable prompt: scaffold a new example
├── AGENTS.md                          # Instructions for AI coding agents
├── README.md                          # Project overview and guide
├── CONTRIBUTING.md                    # Guidelines for contributors
└── examples/
    ├── python/             # Python examples
    │   ├── basics.py       # Basic code generation examples
    │   └── tests/
    │       └── test_basics.py
    └── javascript/         # JavaScript examples
        ├── basics.js       # Basic code generation examples
        └── tests/
            └── test_basics.js
```

## Getting Started

1. **Install GitHub Copilot** – Available as an extension for [VS Code](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot), JetBrains IDEs, Neovim, and more.
2. **Authenticate** – Sign in with your GitHub account that has an active Copilot subscription.
3. **Start coding** – Open any file and start typing; Copilot will suggest completions automatically.
4. **Accept suggestions** – Press `Tab` to accept a suggestion, or `Esc` to dismiss it.

## Examples

The `examples/` directory contains hands-on demonstrations of GitHub Copilot capabilities:

| Example | Description |
|---------|-------------|
| [`examples/python/basics.py`](examples/python/basics.py) | Python functions generated with Copilot assistance |
| [`examples/python/tests/test_basics.py`](examples/python/tests/test_basics.py) | pytest tests for the Python examples |
| [`examples/javascript/basics.js`](examples/javascript/basics.js) | JavaScript utilities generated with Copilot assistance |
| [`examples/javascript/tests/test_basics.js`](examples/javascript/tests/test_basics.js) | Node.js tests for the JavaScript examples |

## GitHub Copilot Configuration Files

This repository includes dedicated GitHub Copilot configuration files to enhance Copilot's suggestions and enable reusable workflows:

| File | Purpose |
|------|---------|
| [`.github/copilot-instructions.md`](.github/copilot-instructions.md) | Repository-wide custom instructions applied to every Copilot interaction |
| [`.github/instructions/python.instructions.md`](.github/instructions/python.instructions.md) | Path-specific instructions applied when working on Python files |
| [`.github/instructions/javascript.instructions.md`](.github/instructions/javascript.instructions.md) | Path-specific instructions applied when working on JavaScript files |
| [`.github/prompts/generate-tests.prompt.md`](.github/prompts/generate-tests.prompt.md) | Reusable Copilot Chat prompt for generating unit tests |
| [`.github/prompts/add-example.prompt.md`](.github/prompts/add-example.prompt.md) | Reusable Copilot Chat prompt for scaffolding a new example |
| [`AGENTS.md`](AGENTS.md) | Instructions for AI coding agents (Copilot agent mode, etc.) |

### Using Reusable Prompts

In VS Code or other supported editors, open Copilot Chat and type `/` to see the available prompts from `.github/prompts/`. Select a prompt to load it and fill in the requested input.

## Contributing

Contributions and improvements are encouraged to enhance the quality and usefulness of this repository. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get involved.

## License

This repository does not currently include an explicit open-source license. All rights are reserved. You may browse and learn from the code in this repository, but you may not copy, distribute, or reuse it in your own projects without explicit permission from the project owner or until a LICENSE file is added.
