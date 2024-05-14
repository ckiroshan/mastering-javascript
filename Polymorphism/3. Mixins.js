console.log("<=== Mixins ===>");

// Feature objects
const canEat = {
  eat: function () {
    this.hunger--;
    console.log("Eating!");
  },
};
const canWalk = {
  walk: function () {
    console.log("Walking!");
  },
};
const canSwim = {
  swim: function () {
    console.log("Swimming!");
  },
};

// Constructor functions
function Person() {}
function Goldfish() {}

// Assigning members
function mixins(targetObject, ...sources) {
  Object.assign(targetObject, ...sources);
}

mixins(Person.prototype, canEat, canWalk); // To Person
mixins(Goldfish.prototype, canEat, canSwim); // To Goldfish

// Object instances
const ben = new Person();
const nemo = new Goldfish();
console.log(ben);
console.log(nemo);
