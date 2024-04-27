console.log("<======= Add To Arrays =======>");

const numbers = [22, 99];

// End
numbers.push(31, 54);
console.log(numbers);  // Output: (4) [22, 99, 31, 54]

// Beginning
numbers.unshift(1, 8);
console.log(numbers);  // Output: (6) [1, 8, 22, 99, 31, 54]

// Middle
numbers.splice(3, 0, "a", "b");
console.log(numbers); // Output: (8) [1, 8, 22, 'a', 'b', 99, 31, 54]
