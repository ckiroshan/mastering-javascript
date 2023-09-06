console.log("<=== fizzBuz Algorithm ===>");
console.log("");

/**
 * Popular Interview Question!!!
 * Write a function
 * If Divisible by 3 => Fizz
 * If Divisible by 5 => Buzz
 * If Divisible by 3 & 5 => FizzBuzz
 * Not Divisible by 3 or 5 => input (if you pass 7, you get 7. "same input")
 * Not a Number => 'Not a Number'
 * Call the function & pass the arguments.
 * */

// MY WAY
const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (input % 3 == 0 && input % 5 == 0) {
    return "FizzBuzz";
  } else if (input % 3 == 0) {
    return "Fizz";
  } else if (input % 5 == 0) {
    return "Buzz";
  } else if (typeof input == "string") {
    return "Not a Number";
  } else {
    return input;
  }
}
console.log("");

// Mosh Way
const output2 = fizzBuzz2();
console.log(output2);

function fizzBuzz2(input) {
  if (typeof input != "number") {
    // Checks if input is a Number
    return NaN;
  }
  if (input % 3 == 0 && input % 5 == 0) {
    return "FizzBuzz";
  }
  if (input % 3 == 0) {
    return "Fizz";
  }
  if (input % 5 == 0) {
    return "Buzz";
  }
  return input;
}
