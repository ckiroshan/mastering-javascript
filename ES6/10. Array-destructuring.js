console.log("<=== Array Destructuring ===>");

const vehicles = ["Mercedes Benz Maybach", "BMW Jeep", "Audi R8"];

// Old way
const vehicle1 = vehicles[0];
const vehicle2 = vehicles[1];
const vehicle3 = vehicles[2];

// New way
const [sedan, SUV, Exotic] = vehicles;
console.log(sedan);
console.log(SUV);
console.log(Exotic);
