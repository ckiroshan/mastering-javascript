const circle = {
  radius: 1,
};

// Adding properties
circle.color = "yellow";
circle.draw = function () {};

console.log(circle);

// Removing properties
delete circle.color;
delete circle.draw;

console.log(circle);
