console.log("<=== Function-arguments ===>");

// Passing too many arguments
function sum3(a, b) {
  let sum = 0;
  for (const value of arguments) {
    sum += value;
  }
  return sum;
}

console.log(sum3(1, 2, 3, 4, 5, 45)); // 60
