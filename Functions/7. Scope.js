console.log("<=== Scope in JS ===>");

// Global variable
const color = "red";
console.log(color); // red

function start() {
  // Local variable
  const color = "black";
  console.log(color); // black
}

start();
