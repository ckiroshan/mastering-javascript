console.log("<=== Custom Prototypical Inheritance ===>");

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Duplicate!");
};

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype); // shapeBase
  Child.prototype.constructor = Child; // Resets the constructor
}

// Circle Constructor
function Circle(radius, color) {
  Shape.call(this, color); // Calls super constructor
  this.radius = radius;
}

extend(Circle, Shape);

// Square Constructor
function Square(size) {
  this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, "red");
const sq = new Square(10);

