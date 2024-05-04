console.log("<== Ex Array from range ==>");

/**
 * Create a function called arrayFromRange()
 * Takes 2 parameters: min and max
 */

const numbers = arrayFromRange(1, 8);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

console.log(numbers); // (8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrayFromRange(-7, -1)); // (7) [-7, -6, -5, -4, -3, -2, -1]
