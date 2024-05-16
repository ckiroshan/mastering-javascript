console.log("<=== This keyword ===>");

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
// Method call
c.draw();

const draw = c.draw;
draw();

