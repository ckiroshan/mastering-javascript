console.log("<=== Inheritance in ES6 ===>");

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
}

const c = new Circle("Black", 19);