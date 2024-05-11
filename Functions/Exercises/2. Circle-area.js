console.log("<=== Ex ... ===>");

/**
 * Create circle object in object literal syntax
 * Have => circle.radius -> Can read & write
 *      => circle.area -> Can read only
 */

const circle = {
  radius: 1,

  get area() {
    return Math.PI * (this.radius * this.radius);
  },
};

console.log(circle.area);
circle.radius = 3;
console.log(circle.area);
circle.radius = 4;
console.log(circle.area);

// MSG: Exercise: ...
