console.log("<== Sorting Arrays ==>");

const numbers = [5, 7, 1, 3, 9, 8];

// Sort arrays
numbers.sort();
console.log(numbers); // Output: (6) [1, 3, 5, 7, 8, 9]

// Reverse arrays
numbers.reverse();
console.log(numbers); // Output: (6) [9, 8, 7, 5, 3, 1]

console.log("<=============>");

const courses = [
  {
    id: 1,
    name: "Node.js",
  },
  {
    id: 2,
    name: "JavaScript",
  },
];

courses.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);

/** Output: 
 * 0 : {id: 2, name: 'JavaScript'}
 * 1 : {id: 1, name: 'Node.js'}
 *  
*/ 

