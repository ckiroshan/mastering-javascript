console.log("<== Checking Arrays ==>");

const numbers = [5, 7, 1, 3, 9, 8];

// Check if all numbers are positive
const allPositiveNumbers = numbers.every((value) => {
  return value >= 0;
});

console.log(allPositiveNumbers)

