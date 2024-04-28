console.log("<======= Combining Arrays =======>");

const first = [1, 2, 3];
const last = [4, 5, 6];

// Combining 2 arrays
const combined = first.concat(last);
console.log(combined); // Output: (6) [1, 2, 3, 4, 5, 6]

// Split an array
const slice = combined.slice(2, 4);
console.log(slice); // Output: (2) [3, 4]

// Combine using spread operator
const spreadCombined = [...first, ...last];
console.log(spreadCombined); // Output: (6) [1, 2, 3, 4, 5, 6]

