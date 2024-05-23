console.log("<=== Destructuring ===>");

const person = {
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: 1994,
};

const { firstName: fn, lastName: ln, dateOfBirth: dob } = person;
console.log(fn);
console.log(ln);
console.log(dob);
