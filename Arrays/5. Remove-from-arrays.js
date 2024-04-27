console.log("<======= Removing elements in Arrays =======>");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers); // Output: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// End
const last = numbers.pop();
console.log(numbers); // Output: (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(last); // Output: 10

// Beginning
const first = numbers.shift(1);
console.log(numbers); // Output: (8) [2, 3, 4, 5, 6, 7, 8, 9]
console.log(first); // Output: 1

// Middle
const middle = numbers.splice(2, 3);
console.log(numbers); // Output: (5) [2, 3, 7, 8, 9]
console.log(middle); // Output: (3) [4, 5, 6]

