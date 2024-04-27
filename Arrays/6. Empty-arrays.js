console.log("<======= Emptying Arrays =======>");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers); // Output: (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Solution #1
numbers = [];
console.log(numbers); // Output: []

// Solution #2
numbers.length = 0;
console.log(numbers); // Output: []

// Solution #3
numbers.splice(0, numbers.length);
console.log(numbers); // Output: []

