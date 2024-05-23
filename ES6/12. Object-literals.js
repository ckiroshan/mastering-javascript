console.log("<=== Enhanced Object Literals ===>");

const brand = "Microsoft";

const data = {
  [brand]: "Surface Laptop",
  model: 2022,
  price: 1_200,

  buy: () => console.log("I bought the Surface Laptop!"),
};

console.log(data);
data.buy();


// Property shorthand
const designation = "Student";

const admission = {
  name: "Kane",
  dob: 1999,
  home: "Amityville",
  designation,
};

console.log(admission);
