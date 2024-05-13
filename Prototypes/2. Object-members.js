console.log("<=== Prototype vs Instance members ===>");

function Circle(radius) {
  // Instance members
  this.radius = radius;
}

// Prototype members
Circle.prototype.draw = function () {
  console.log("Draw!");
};

Circle.prototype.toString = function () {
  // return "Circle with radius " + this.radius;
  return `Circle with radius ${this.radius}`;
};

const c1 = new Circle(10);
console.log(c1.toString()); // Circle with radius 10
const c2 = new Circle(20);
console.log(c2.toString()); // Circle with radius 20

console.log(Object.keys(c1)); // radius
for (let key in c1) {
  console.log(key); // radius draw toString
}

console.log(c1.hasOwnProperty("radius")); // true
console.log(c1.hasOwnProperty("move")); // false
