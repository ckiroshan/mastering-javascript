// Math Object useful methods
const minNumber = 0;
const maxNumber = 22;

// Random() method
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + 1;
}

console.log(getRndInteger(minNumber, maxNumber));
console.log(getRndInteger(minNumber, maxNumber));
console.log(getRndInteger(minNumber, maxNumber));
console.log("");

// Other Methods
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.round(19.99291)); // Output: 20
console.log(Math.ceil(29.99291)); // Output: 30
console.log(Math.floor(75.99291)); // Output: 75
console.log(Math.trunc(19.99291)); // Output: 19
console.log(Math.pow(8, 2)); // Output: 64
console.log(Math.sqrt(64)); // Output: 8
console.log(Math.abs(-4.7)); // Output: 4.7
console.log(Math.min(0, 150, 30, 20, -8, -200)); // Output: -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // Output: 150
console.log(Math.log(1)); // Output: 2.80
