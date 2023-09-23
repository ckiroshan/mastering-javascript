console.log("<=== Grade Of Student ===>");
console.log("");

const marks = [80, 50, 80];

console.log(calculateGrade(marks));

// Approach #1
function calculateGrade(marks) {
  // calculate avg grade
  let totalMarks = 0;
  let averageGrade = 0;

  for (let mark of marks) {
    totalMarks += mark;
  }
  averageGrade = totalMarks / marks.length;
  console.log("Marks: ", marks);
  console.log("Total Marks: ", totalMarks);
  console.log("Average Marks:", averageGrade);
  if (averageGrade < 60) return "F";
  if (averageGrade < 69) return "D";
  if (averageGrade < 79) return "C";
  if (averageGrade < 89) return "B";
  return "A";
}
console.log("");

// Approach #2
// Create 2 functions this time.

function calculateAverage(array) {
  let total = 0;
  let average = 0;

  for (let value of array) {
    total += value;
  }
  average = total / array.length;
  console.log("Array: ", array);
  console.log("Total: ", total);
  console.log("Average:", average);
  return average;
}

function calculateGrade2(marks) {
  const average = calculateAverage(marks);
  // console.log("Average Marks:", averageMarks);
  if (average < 60) return "F";
  else if (average < 69) return "D";
  else if (average < 79) return "C";
  else if (average < 89) return "B";
  else return "A";
}

console.log(calculateGrade2(marks));
