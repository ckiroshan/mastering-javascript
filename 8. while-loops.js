console.log("<=== While loops in JS ===>");

console.log("");

// Even Numbers
console.log("All Even numbers upto 10");
let i = 1;
while (i <= 10) {
  // (Condtion | {statements})
  if (i % 2 == 0) console.log("Even Number:", i);
  i++;
}
console.log("");

console.log("All Even numbers from 10");
let j = 10;
while (j >= 1) {
  // (Condtion | {statements})
  if (j % 2 == 0) console.log("Even Number:", j);
  j--;
}