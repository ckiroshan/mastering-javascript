console.log("<=== Polymorphism ===>");

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype); // shapeBase
  Child.prototype.constructor = Child; // Resets the constructor
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicate!");
};

// Circle Constructor
function Circle() {}
extend(Circle, Shape);

// Overriding duplicate method
Circle.prototype.duplicate = function () {
  console.log("Duplicated circle!");
};

// Square Constructor
function Square() {}
extend(Square, Shape);

// Overriding duplicate method
Square.prototype.duplicate = function () {
  console.log("Duplicated square!");
};

const shapes = [new Circle(), new Square()];

// Polymorphism
for (const shape of shapes) {
  shape.duplicate();
}
