console.log("<=== Max Of Two Numbers ===>");
console.log("");

/**
 * Write a function
 * That takes 2 numbers
 * Returns the maximum of the 2 numbers.
 * Call the function & pass the arguments.
 * */

function maxNumber(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

console.log("The max number is: " + maxNumber(12, 6));
console.log("The max number is: " + maxNumber(52, 77));
console.log("The max number is: " + maxNumber(12, 12));
console.log("");
/**
 * You pass multiple arguments here.
 * Each time you are running a test case.
 * Its always good to test your functions in many ways
 * */

console.log("<=== Short way: Max Of Two Numbers ===>");

function maxNumber2(number1, number2) {
  return (number1 > number2) ? number1 : number2
}

console.log("The max number is: " + maxNumber2(12, 6));
console.log("The max number is: " + maxNumber2(52, 77));
console.log("The max number is: " + maxNumber2(12, 12));