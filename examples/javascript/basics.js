/**
 * GitHub Copilot Basics - JavaScript Examples
 *
 * This file demonstrates how GitHub Copilot can generate JavaScript code
 * from natural language comments. Each section shows a prompt (comment)
 * and the code Copilot helped produce.
 */


// --- Example 1: Capitalize the first letter of each word in a string ---

function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}


// --- Example 2: Remove duplicate values from an array ---

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// --- Example 3: Deep clone an object ---

function deepClone(obj) {
  // Use native structuredClone when available; fall back to JSON-based clone for older runtimes.
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}


// --- Example 4: Debounce a function ---

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}


// --- Example 5: Check if a number is prime ---

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}


// --- Example 6: Group an array of objects by a property ---

function groupBy(arr, key) {
  return arr.reduce((groups, item) => {
    const group = item[key];
    // Guard against prototype pollution keys
    if (group === "__proto__" || group === "constructor" || group === "prototype") {
      return groups;
    }
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, Object.create(null));
}


// Quick demo (Node.js)
if (typeof require !== "undefined" && require.main === module) {
  console.log(titleCase("hello world from copilot")); // Hello World From Copilot
  console.log(removeDuplicates([1, 2, 2, 3, 3, 3]));  // [1, 2, 3]
  console.log(isPrime(17));                            // true
  console.log(
    groupBy(
      [
        { name: "Alice", dept: "Engineering" },
        { name: "Bob", dept: "Design" },
        { name: "Carol", dept: "Engineering" },
      ],
      "dept"
    )
  );
}

module.exports = { titleCase, removeDuplicates, deepClone, debounce, isPrime, groupBy };
