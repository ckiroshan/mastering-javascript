console.log("<=== Method Burrowing ===>");

const obj = {
  fName: "John",
  lName: "Wick",
  yearOfBirth: 1998,
  sayMyName: function () {
    // console.log(obj.fName);
    console.log(`${this.fName} ${this.lName}`); // will be obj.fName + obj.lName
  },
  calculateAge: function () {
    console.log(2026 - this.yearOfBirth);
  },
};

obj.sayMyName();
obj.calculateAge();

const captSparrow = {
  yearOfBirth: 1978,
};

// Method Burrowing
captSparrow.calculateAge = obj.calculateAge;
captSparrow.calculateAge(); // 48
