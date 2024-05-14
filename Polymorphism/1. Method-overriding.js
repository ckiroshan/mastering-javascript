console.log("<=== Method overriding ===>");

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

const c = new Circle();
c.duplicate(); // Duplicated circle!

