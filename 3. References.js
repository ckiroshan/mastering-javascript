// <================= Objects =================>

let person = {
  name: "Kane",
  age: 21,
}; // Object literal

console.log(person);

// the value of a property can be changed in 2 ways.

// Dot Notation
person.name = "Bryan";
console.log(person.name); // Bryan

// Bracket Notation
person["name"] = "Mary";
console.log(person["name"]); // Mary

// <================= Arrays =================>

let selectedColor = ["red", "white"];
console.log(selectedColor); // (2) ['red', 'white']

// each element in a array can be accessed using index.
// Index:    0  |  1
//         red  |  white

console.log(selectedColor[0]); // red

selectedColor[2] = "green";
console.log(selectedColor); // (3) ['red', 'white', 'green']

selectedColor[3] = 4;
console.log(selectedColor); // (4) ['red', 'white', 'green', 4]

console.log(selectedColor.length) // 4
