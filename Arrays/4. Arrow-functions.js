console.log("<======= Arrow functions =======>");

const courses = [
  {
    id: 1,
    name: "Course 1",
  },
  {
    id: 2,
    name: "Course 2",
  },
];

// Method #1 of arrow functions
const findCourse = courses.find((course) => {
  course.name === "Course 2";
});

// Method #2 of arrow functions
const findCourse2 = courses.find(course => {
  course.name === "Course 2";
});

// Method #3 of arrow functions
const findCourse3 = courses.find(course => course.name === "Course 2");

console.log(findCourse3); // Output: {id: 2, name: 'Course 2'}

