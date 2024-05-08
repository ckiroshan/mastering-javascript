console.log("<=== Var & Let in JS ===>");

// Problem #1 - var works outside of code block
function start() {
  for (let i = 0; i < 5; i++) {
    if (true) {
      var color = "red";
    }
  }
  console.log(color);
}

