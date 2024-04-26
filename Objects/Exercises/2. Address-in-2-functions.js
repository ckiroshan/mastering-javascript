console.log("<=========== Ex Address in 2 functions ===========>");

/**
 * Initialize the address object using:
 * 1. Using Factory function
 * 2. Using Constructor function
 */

// Factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const addressOne = createAddress("Jefferson street", "Cincinnati", "100214");
console.log(addressOne);

// COnstructor function
function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const addressTwo = new CreateAddress("Befferson street", "Ohio", "990214");
console.log(addressTwo);
