console.log("<================= Arithmetic Operators =================>");

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
console.log("");

// <==== Increment (++) ====>
x = 20;
console.log("Now value of X = " + x);
console.log(++x); // 21
// '++' before x would increment x first and log it to console.

console.log(x++); //21
// '++' after x would log to console first. then it would be incremented.
console.log(x); // 22
// Now the value is incremented.
console.log("");

// <==== Decrement (--) ====>
// same applies to decrement as well

x = 20;
console.log("Now value of X = " + x);

console.log(--x); // 19
console.log(x--); // 19
console.log(x); // 18
console.log("");

console.log("<================= Assignment Operators =================>");

x = 10;
console.log("Now value of X = " + x);

x = x + 9;
console.log(x); // 19 // A shorthand to above one.

console.log((x += 5)); // 24
console.log((x -= 5)); // 19
console.log((x *= 5)); // 95
console.log((x /= 5)); // 19
console.log((x %= 5)); // 4
console.log((x **= 5)); // 1024
console.log("");

console.log("<================= Comparison Operators =================>");

// Relational Operators
x = 10;
console.log("Now value of X = " + x);

console.log(x > 0); // x greater than 0 => True
console.log(x >= 10); // x greater than or equal 10 => True
console.log(x < 10); // x less than 10 => False
console.log(x <= 10); // x less than or equal 10 => True
console.log("");

// Equality Operators
console.log(x === 10); // If x is equal to 10 => True
console.log(x !== 10); // If x is not equal to 10 => False
console.log("");

console.log("<================= Equality Operators =================>");

x = 1;
console.log("Now value of X = " + x);
// Strict equality operator
console.log(x === 1); // True
// This checks if both 'x' & '1' are the same type & same value
console.log("x" === 1); // False
// Here 'x' is string. 1 is number. Hence, this will be false.

// Lose equality operator
console.log(x == 1); // True
console.log("x" == 1); // True (Console is false)
// This is true as x is string, it would convert 1 into a string as well.
// But this is currently shown in console as false.
console.log(true == 1); // True
// This is true as x is boolean, it would convert 1 into a boolean as well
console.log(false == 0); // True
console.log("");

console.log("<================= Ternary Operators =================>");

/**
 * If a customer has more than 100 points.
 * they are a 'Gold' customer.
 * else they are a 'Silver' customer.
 */

/*
let customerName = prompt("What is your name?");
let pointsInHand = null;

pointsInHand = prompt("What is your current points score?");

let memberType = pointsInHand > 100 ? "Gold" : "Silver";

console.log("Hi "+ customerName + ", You are a " + memberType + ' member!')
*/
console.log("");

console.log("<================= Logical Operators =================>");

console.log("Logical AND (&&)");

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); // True
// In '&&' if both operands True, result is true. else false.

console.log("Logical OR (||)");

highIncome = true;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan); // True
// In '||' if either one of the operands are True, result is true. else false.

console.log("Logical NOT (!)");

highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;

console.log("Eligible", eligibleForLoan); // True

let applicationRefused = !eligibleForLoan;
console.log("Is application refused", applicationRefused);

console.log("");

console.log("<================= Bitwise Operators =================>");

// 1 byte = 8 bits
// 1 = 00000001
// 2 = 00000010

console.log("Bitwise OR: " + (1 | 2));
/**
 * 1 = 00000001
 * 2 = 00000010
 * R = 00000011
 * Result: 00000011 = 3
*/

console.log("Bitwise AND: " + (1 & 2));
/**
 * 1 = 00000001
 * 2 = 00000010
 * R = 00000000
 * Result: 00000000 = 0
*/ 

/**
 * A user access control system
 * User permissions: read, write, execute 
 * Read -    00000100 : Decimal 4
 * Write -   00000010 : Decimal 2
 * Execute - 00000001 : Decimal 1
*/

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission
// Using bitwise OR: we can add permissions.

let displayMessage = (myPermission & readPermission) ? "Yes" : "No";
// Using bitwise AND: we can check if we have given permission.
console.log(displayMessage)

