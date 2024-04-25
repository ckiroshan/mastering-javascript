const circle = {
  radius: 1,
  draw() {
    console.log("Circle complete!");
  },
};

console.log(circle);

// Clone an object
const another = Object.assign({}, circle);
console.log(another);

// Clone using spread operator
const spreadCircle = { ...circle };
console.log(spreadCircle);
