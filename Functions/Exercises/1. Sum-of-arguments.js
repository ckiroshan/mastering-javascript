console.log("<=== Ex Sum of Arguments ===>");

/**
 * Create sum() => Takes varying number of arguments
 * Returns the sum of all arguments
 * AD: It now accepts an array and still returns sum
 */

// Basic Sum
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]];
  }
  return items.reduce((a, b) => a + b);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sum(numbers));
