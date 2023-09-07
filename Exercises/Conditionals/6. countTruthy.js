console.log("<=== Count Truthy ===>");
console.log("");

/**
 * function 'countTruthy' takes parameter (array)
 * returns number of truthy elements in the array.
 * if array = [1,2,3,4]. Output: 4
 * if array = [1,null, undefined, 2,3,4]. Output: 4
 */

// Falsy values: undefined, null, '', false, 0, NaN

const newArray = [1, 2, null, NaN, 3, 4, 5, 6];

console.log(countTruthy(newArray));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
