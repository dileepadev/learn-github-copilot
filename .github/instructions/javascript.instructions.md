---
applyTo: "examples/javascript/**/*.js"
---

# JavaScript Coding Instructions

## Style
- Use 2-space indentation.
- Use `const` and `let`; never use `var`.
- Use arrow functions for callbacks.
- Add a trailing newline at the end of every file.

## Documentation
- Export every public function with a JSDoc comment:
  ```js
  /**
   * One-line summary.
   * @param {type} paramName - Description.
   * @returns {type} Description of return value.
   */
  function myFunction(paramName) { ... }
  ```

## Exports
- All utility functions must be exported at the bottom of the file:
  ```js
  module.exports = { functionA, functionB };
  ```
- Guard demo/logging code with:
  ```js
  if (typeof require !== "undefined" && require.main === module) { ... }
  ```

## Testing (Node.js built-in runner)
- Test files live in `examples/javascript/tests/` and must be named `test_*.js`.
- Run tests with: `node examples/javascript/tests/test_basics.js`
- Tests use a lightweight hand-rolled `assert` helper defined in the test file – no extra test framework is needed.
- Each function needs at minimum: one typical case, one edge case, and one invalid-input case.

## Safety
- Use `Object.create(null)` (or `Map`) as accumulators when grouping/keying by dynamic user-supplied values to avoid prototype pollution.
- Use `structuredClone` for deep cloning (requires Node.js 17+).
