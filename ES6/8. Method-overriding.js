console.log("<=== Method Overriding in ES6 ===>");

class Shape {
  move() { console.log("move!"); }
}
class Circle extends Shape {
  move() {
    super(move()); // move!
    console.log("circle move!"); // circle move!
  }
}
const c = new Circle();
