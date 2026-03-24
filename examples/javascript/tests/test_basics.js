/**
 * Tests for examples/javascript/basics.js
 * Run with: node examples/javascript/tests/test_basics.js
 */

const {
  titleCase,
  removeDuplicates,
  deepClone,
  isPrime,
  groupBy,
} = require("../basics");

let passed = 0;
let failed = 0;

function assert(description, condition) {
  if (condition) {
    console.log(`  ✓ ${description}`);
    passed++;
  } else {
    console.error(`  ✗ ${description}`);
    failed++;
  }
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// titleCase
console.log("titleCase");
assert("capitalizes each word", titleCase("hello world") === "Hello World");
assert("lowercases mixed input", titleCase("HELLO WORLD") === "Hello World");
assert("handles single word", titleCase("copilot") === "Copilot");

// removeDuplicates
console.log("removeDuplicates");
assert(
  "removes duplicates from array",
  deepEqual(removeDuplicates([1, 2, 2, 3, 3, 3]), [1, 2, 3])
);
assert(
  "returns same array when no duplicates",
  deepEqual(removeDuplicates([1, 2, 3]), [1, 2, 3])
);
assert("handles empty array", deepEqual(removeDuplicates([]), []));

// deepClone
console.log("deepClone");
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 99;
assert("creates an independent copy", original.b.c === 2);
assert("values are equal after clone", deepEqual(deepClone({ x: 1 }), { x: 1 }));

// isPrime
console.log("isPrime");
assert("2 is prime", isPrime(2) === true);
assert("17 is prime", isPrime(17) === true);
assert("1 is not prime", isPrime(1) === false);
assert("4 is not prime", isPrime(4) === false);
assert("negative numbers are not prime", isPrime(-5) === false);

// groupBy
console.log("groupBy");
const people = [
  { name: "Alice", dept: "Engineering" },
  { name: "Bob", dept: "Design" },
  { name: "Carol", dept: "Engineering" },
];
const grouped = groupBy(people, "dept");
assert("groups Engineering members", grouped.Engineering.length === 2);
assert("groups Design members", grouped.Design.length === 1);
assert("Alice is in Engineering", grouped.Engineering[0].name === "Alice");

// Summary
console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
