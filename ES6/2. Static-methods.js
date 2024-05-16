console.log("<=== Static methods ===>");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Instance method
  draw() {}

  // Static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const c = Circle.parse(`{"radius":1}`);
console.log(c);

