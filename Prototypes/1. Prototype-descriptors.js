console.log("<=== Inheritance in OOP ===>");

const person = { name: "John" };

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: true,
  enumerable: false,
  configurable: true,
});
