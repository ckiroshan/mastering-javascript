console.log("<=== Super constructor ===>");

function Shape(color) {
  this.color = color;
}

function Circle(radius, color) {
  Shape.call(this, color); // Calls super constructor
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype); // shapeBase
Circle.prototype.constructor = Circle; // Resets the constructor

const s = new Shape();
const c = new Circle(1, "red");

