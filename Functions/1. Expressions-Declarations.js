console.log("<=== Expressions & Declarations ===>");

// Function Declaration
function walk() {
  console.log("Started walking!");
}

walk(); // Started walking!

// Function Expression
let run = function () {
  console.log("Started running!");
};

run(); // Started running!

const move = run;
move(); // Started running!