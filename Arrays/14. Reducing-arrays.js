console.log("<== Reducing Arrays ==>");

const numbers = [5, 7, 1, -3, 9, 8, -1];

// Get the sum of all values
const sum = numbers.reduce((accumalator, currentValue) => accumalator + currentValue);

console.log(sum);
