console.log("<=== Ex ... ===>");

/**
 * if 1st argument is not array
 * Throw an exception
 */

// Reducing method approach
function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Value is not an array.");
  }
  return array.reduce((accumulator, currentValue) => {
    const occurrence = currentValue === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2];
  const count = countOccurrences(numbers, 2);
  console.log(count);
} catch (err) {
  console.log(err.message);
}

