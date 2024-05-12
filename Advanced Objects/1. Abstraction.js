console.log("<=== Abstraction ===>");

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; // Hidden from outside access
  let computeOptimumLocation = function (factor) { // Hidden from outside access
    //...
  };

  this.draw = function () {
    computeOptimumLocation(0.1);
    console.log("draw!");
  };
}

const circle = new Circle(10);
circle.radius = 10;
console.log(circle);
circle.draw();

