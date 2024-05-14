console.log("<=== Custom Prototypical Inheritance ===>");

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicate!");
};

function Circle() {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype); // shapeBase
Circle.prototype.constructor = Circle; // Resets the constructor

Circle.prototype.draw = function () {
  console.log("Draw!");
};

const s = new Shape();
const c = new Circle(1);
