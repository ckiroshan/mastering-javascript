console.log("<=== Getters & Setters ===>");

const person = {
  firstName: "John",
  lastName: "Smith",

  // Getter
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  // Setter
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("Value is not a string.");
    }
    const parts = value.split(" ");
    if(parts.length !== 2) {
      throw new Error('Enter a first name and last name.');
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = null;
} catch (err) {
  console.log(err);
}

console.log(person.fullName);

// Set full name
person.fullName = "John Cena";
console.log(person.fullName);
