console.log("<=== Common JS Module (For NodeJS) ===>");

// Imports the Circle object from given location
const Circle = require("./1. Circle-object");

const c = new Circle(10);
c.draw();
