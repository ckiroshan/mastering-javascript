console.log("<=== Arrow VS Regular functions ===>");

// ✅ This in arrow function
var firstName = "John wick";
const jack = {
  firstName: "Jack",
  year: 1978,
  calcAge: function () {
    console.log(2026 - this.year); // 48

    // const isBornAfter80 = function () {
    //     console.log(this);
    //     undefined.year;
    //     console.log(this.year <= 1980);
    // };
    // isBornAfter80();
  },
  greet: () => {
    console.log(this); // Window object
    console.log(this.firstName); // Jack -> Within the window object
  },
};

jack.calcAge();
jack.greet();
