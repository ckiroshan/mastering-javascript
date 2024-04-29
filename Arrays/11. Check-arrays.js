console.log("<== Checking Arrays ==>");

const numbers = [5, 7, 1, 3, 9, 8,-1];

// Check if all numbers are positive
const allPositiveNumbers = numbers.every((value) => {
  return value >= 0;
});

console.log(allPositiveNumbers)

// Check if at least 1 number is positive
const atleastOnePositive = numbers.some((value) => {
  return value >= 0;
});

console.log(atleastOnePositive)

