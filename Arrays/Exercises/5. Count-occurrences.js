console.log("<== Ex Count Occurrences in Arrays ==>");

/**
 * Create a function called countOccurrences()
 * Takes 2 parameters => array, searchElement
 * Returns number of occurrences of the searchElement
 * One simple method is done. Implement this using reducing method.
 * */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2];

// Simple approach
function countOccurrences1(array, searchElement) {
  let count = 0;
  for (let element of array) {
    if (element === searchElement) {
      count++;
    }
  }
  return count;
}

// Reducing method approach
function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    const occurrence = currentValue === searchElement ? 1 : 0;
    // console.log(accumulator, currentValue, searchElement);
    return accumulator + occurrence;
  }, 0);
}

const count1 = countOccurrences1(numbers, 2);
const count = countOccurrences(numbers, 2);
console.log(count1);
console.log(count);
