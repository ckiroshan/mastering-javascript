// <================= Arithmetic Operators =================>

let x = 4;
let y = 10;

console.log(x + y); // Addition operator
// 'x' & 'y' are operands.
// 'x + y' is a an expression in JS

console.log(x + y); // Addition operator
console.log(x - y); // Substraction operator
console.log(x * y); // Multiplication operator
console.log(x / y); // Division operator
console.log(x % y); // Modulas operator (remainder of division)
console.log(x ** y); // Exponentiation operator (X to power of Y)

// <==== Increment (++) ====>
x = 20;
console.log(++x); // 21
// '++' before x would increment x first and log it to console.

console.log(x++); //21
// '++' after x would log to console first. then it would be incremented.
console.log(x); // 22
// Now the value is incremented.

// <==== Decrement (--) ====>
// same applies to decrement as well

x = 20;

console.log(--x); // 19
console.log(x--); // 19
console.log(x); // 18
console.log("");

// <================= Assignment Operators =================>

x = 10;
console.log(x);

x = x + 9;
console.log(x); // 19 // A shorthand to above one.

console.log((x += 5)); // 24
console.log((x -= 5)); // 19
console.log((x *= 5)); // 95
console.log((x /= 5)); // 19
console.log((x %= 5)); // 4
console.log((x **= 5)); // 1024
console.log("");

// <================= Comparison Operators =================>

// Relational Operators
x = 10;

console.log(x > 0); // x greater than 0 => True
console.log(x >= 10); // x greater than or equal 10 => True
console.log(x < 10); // x less than 10 => False
console.log(x <= 10); // x less than or equal 10 => True
console.log("");

// Equality Operators
console.log(x === 10) // If x is equal to 10 => True
console.log(x !== 10) // If x is not equal to 10 => False
console.log("");