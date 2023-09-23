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
