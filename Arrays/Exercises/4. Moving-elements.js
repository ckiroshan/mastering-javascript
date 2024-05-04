console.log("<== Ex Moving elements in Arrays ==>");

/**
 * Create a function called move()
 * Used to move an element in an array
 * Takes 3 parameters => array, index (element index to be moved), offset
 */

const numbers = [1, 2, 3, 4, 5];

function move(array, index, offset) {
  const position = index + offset;
  if (position > array.length || position < 0) {
    console.error("Invalid offset.");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

const output = move(numbers, 0, 9);
console.log(output);
