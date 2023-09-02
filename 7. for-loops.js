console.log("<====== For Loops in JS ======>");
console.log("");

for (let i = 1; i <= 5; i++) {
  // (Initialize expression | Condition | Increment expression)
  console.log("Hello World x", i);
  // Runs the code 5 times.
}
console.log("")

// Odd Numbers
console.log("All Odd numbers upto 10");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log("Odd Number: ", i);
  }
}
console.log("");

console.log("All Odd numbers below 10");
for (let i = 10; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log("Odd Number: ", i);
  }
}
console.log("");

// Even Numbers
console.log("All Even numbers upto 10");
for(let i = 1; i <= 10; i++) {
  if(i % 2 == 0) {
    console.log("Even Number:", i)
  }
}
console.log("");

console.log("All Even numbers below 10");
for(let i = 10; i >=1; i--) {
  if(i % 2 ==0) {
    console.log("Even Number:", i);
  }
}