// String Primitive
const message = "This is my first message";

// String Object
const newMessage = new String("Hello World!     ");

console.log(typeof message); // String
console.log(typeof newMessage); // Object

// Common methods of String
console.log(message.length); // Output: 24
console.log(message[0]); // Output: T
console.log(message[1]); // Output: h
console.log(message.includes("Th")); // Output: True
console.log(newMessage.includes("Heb")); // Output: False
console.log(newMessage.startsWith("H")); // Output: True
console.log(newMessage.startsWith("h")); // Output: False
console.log(message.endsWith("e")); // Output: True
console.log(message.endsWith("z")); // Output: False
console.log(message.indexOf("first")); // Output: 11
console.log(message.replace("first", "second")); // Output: This is my second message
console.log(message); // Output: This is my first message
console.log(message.toUpperCase()); // Output: THIS IS MY FIRST MESSAGE
console.log(message.toLowerCase()); // Output: this is my first message
console.log(newMessage); // Output: String {'Hello World!     '}
console.log(newMessage.trim()); // Output: Hello World!
console.log(message.split(" ")); // Output: (5) ['This', 'is', 'my', 'first', 'message']
