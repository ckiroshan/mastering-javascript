console.log("<=== ES6 Classes ===>");

// Class declaration
class Sqaure {}

// Class expression
const Oval = class {};

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = () => console.log("Move it!");
  }
  draw() {
    console.log("Draw!");
  }
}

const c = new Circle(12);


