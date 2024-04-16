function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Circle complete!");
    },
  };
}

const circle1 = createCircle(10);
const circle2 = createCircle(20);

console.log(circle1);
console.log(circle2);
