const now = new Date();
const dateOne = new Date("May 11 2018 09:00");
const nowTwo = new Date(2018, 4, 11, 9);

now.setFullYear(2020);
console.log(now.toDateString()); // Output: Sat Apr 25 2020
console.log(now.toTimeString()); // Output: 17:40:11 GMT+0530 (India Standard Time)
console.log(now.toISOString()); // Output: 2020-04-25T12:10:32.470Z
