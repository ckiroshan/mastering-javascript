console.log("<=========== Ex Object Equality ===========>");

/**
 * Create 2 address objects using Constructor function.
 * Create 2 functions :
 *  1. function areEqual() and pass 2 objects(address).
 *    - Check if both addresses are equal.
 *    - You have to check if each property is equal.
 *    - If all properties are equal, Return true.
 *
 *  2. function areSame() and pass 2 objects(address).
 *    - Check if both addresses point to same object.
 */

// COnstructor function
function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const addressOne = new CreateAddress("Befferson street", "Ohio", "990214");
const addressTwo = new CreateAddress("Befferson street", "Ohio", "990214");

function areEqual(addressOne, addressTwo) {
  return addressOne.street === addressTwo.street && addressOne.city === addressTwo.city && addressOne.zipCode === addressTwo.zipCode;
}
function areSame(addressOne, addressTwo) {
  return addressOne === addressTwo;
}

console.log(areEqual(addressOne, addressTwo));
console.log(areSame(addressOne, addressTwo));

