console.log("<=== Private properties using Symbols ===>");

// Used to make properties & methods private
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw](){
    // function body
  }
}

const c = new Circle(1);
