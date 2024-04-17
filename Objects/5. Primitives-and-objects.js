// Primitives are copied by value.
let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);  // Output: 10

// Objects are copied by their references.
let newObject = { value: 10 };

function increase(newObject) {
  newObject.value++;
}

increase(newObject);
console.log(newObject); // Output: 11
