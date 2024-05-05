console.log("<== Ex Get the max element in array ==>");

/**
 * Create a function called getMax()
 * Give it an array. Returns largest element in the array.
 * Empty array given? Returns undefined.
 * Takes 1 parameters => array
 * One simple method is done. Implement this using reducing method.
 * */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const s = [];

// Simple approach
function getMax(array) {
  let max = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let element of array) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

const max = getMax(numbers);
console.log(max);

// Reducing method approach
function getMaxed(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array.reduce((max, currentValue) => Math.max(max, currentValue));
}
const maxed = getMaxed(numbers);
console.log(maxed);

