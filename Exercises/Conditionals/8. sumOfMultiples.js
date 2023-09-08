console.log("<=== Sum Of Multiples ===>");
console.log("");

/**
 * Create a function sum
 * takes param (limit)
 * return sum of all multiples of 3 & 5 from 0 to given limit.
 */

console.log(sum(10));
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
// sum = 3 + 6 + 9 + 5 + 10 = Output 33.

function sum(limit) {
  // Initialization
  let sum = 0;

  // Logic
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }

  // Return value
  return sum;
}
