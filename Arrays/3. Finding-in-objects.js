console.log("<======= Finding In Arrays =======>");


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

// Find all details of given element
const findCourse = courses.find(function (course) {
  return course.name === "Course 2";
});

console.log(findCourse); // Output: {id: 2, name: 'Course 2'}

// Find index of given element
const findCourseIndex = courses.findIndex(function (course) {
  return course.name === "Course 2";
});

console.log(findCourseIndex); // Output: 1

