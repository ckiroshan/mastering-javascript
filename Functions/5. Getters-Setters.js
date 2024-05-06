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
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person)
console.log(person.fullName);

// Set full name
person.fullName = "John Cena";
console.log(person)
console.log(person.fullName);
