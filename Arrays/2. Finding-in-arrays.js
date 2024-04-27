console.log("<======= Finding In Arrays =======>");

const numbers = [22, 99, 33, 44, 888, 21, 22];

// Find the first element occurence
console.log(numbers.indexOf(33)); // Output: 2
console.log(numbers.indexOf("33")); // Output: -1
console.log(numbers.indexOf("abc")); // Output: -1

// If found (True or False)
console.log(numbers.indexOf(99) !== -1); // Output: True
console.log(numbers.includes(99)); // Output: True

// Find the last element occurence
console.log(numbers.lastIndexOf(22)); // Output: 6
