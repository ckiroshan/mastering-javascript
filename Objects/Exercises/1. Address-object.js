console.log("<=========== Ex Address Object ===========>");

/**
 * Create an object from an address.
 * Create a function showAdresses() that takes address argument.
 * And displays all the properties of the object.
 */

const address = {
  street: "Jefferson street",
  city: "Cincinnati",
  zipCode: "100214",
};

function showAdresses(address) {
  for (let property in address) {
    console.log(property, address[property]);
  }
}

showAdresses(address);
