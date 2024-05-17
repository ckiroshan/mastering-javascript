console.log("<=== Getters & Setters in ES6 ===>");

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() { // Getter
    return _radius.get(this);
  }

  set radius(value) { // Setter
    if (value <= 0) throw new Error("Invalid radius!");
    _radius.set(this, value);
  }
}

const c = new Circle(100);
