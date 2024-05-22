console.log("<=== setTimeout Function ===>");

// setTimeout(function () {
//   console.log("5MB photo.");
// }, 5000);
// setTimeout(function () {
//   console.log("1MB photo.");
// }, 1000);
// setTimeout(function () {
//   console.log("3MB photo.");
// }, 3000);
// setTimeout(function () {
//   console.log("4MB photo.");
// }, 4000);
// setTimeout(function () {
//   console.log("2MB photo.");
// }, 2000);

console.log();
console.log("=== Another Example ===");

console.log("Start");

setTimeout(function () {
  console.log("4MB photo.");
}, 4000);

setTimeout(function () {
  console.log("0MB photo.");
}, 0);

console.log("End");
