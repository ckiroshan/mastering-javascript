console.log("<======= Iterating Arrays =======>");

const numbers = [1, 2, 3];

// For-of loop
for (let number of numbers) {
  console.log(number);
}
console.log("");

// For-each loop
numbers.forEach((number, index) => console.log(index, number));

