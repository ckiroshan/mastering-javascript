console.log("<== Ex If included in Array ==>");

/**
 * Create a function called includes()
 * Takes 2 parameters: array, search Element
 * That checks if the element if found ? True : false
 */

const numbers = [1, 2, 3, 4, 5];

function includes(array, searchElement) {
  for (let element of array) {
    if (array[element] === searchElement) {
      return true;
    }
  }
  return false;
}

console.log(includes(numbers, 2));
