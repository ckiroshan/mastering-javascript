console.log("<=== For..In loops in JS ===>");

console.log("");

console.log("Person Object");
const person = {
  name: "Kane",
  age: 24,
};

for (let key in person) {
  console.log(key, person[key]);
  // Output: name Kane
  //         age 24
}
console.log("");

console.log("Colors Array");
const colors = ["Green", "Black", "Blue"];

for (let index in colors) {
  console.log(index, colors[index]);
  // Output: 0 Green
  //         1 Black
  //         2 Blue 
}
