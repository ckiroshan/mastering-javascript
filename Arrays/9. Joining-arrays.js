console.log("<======= Joining Arrays =======>");

const numbers = [1, 2, 3];

// join method
const joined = numbers.join(", ");
console.log(joined); // Output: 1, 2, 3

// split method
const message = "This is my first message!";
const parts = message.split(" ");
console.log(parts); // Output: (5) ['This', 'is', 'my', 'first', 'message!']

const combinedParts = parts.join("-");
console.log(combinedParts); // Output: This-is-my-first-mesasge!

