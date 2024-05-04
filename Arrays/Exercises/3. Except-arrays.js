console.log("<== Ex Except Arrays ==>");

/**
 * Create a function called except()
 * Takes an array and returns a new array
 * Without containing the value passed
 */

const numbers = [1, 2, 3, 4, 5, 1];

function except(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

const output = except(numbers, [1, 2]);
console.log(output);
