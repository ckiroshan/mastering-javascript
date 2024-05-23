console.log("<=== For of/in Operators ===>");

// For in - Objects
const dataSet = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
};

for (const property in dataSet) {
  console.log(`${property} ${dataSet[property]}`);
}
/** Below is how this loop works
 *
 * `id: dataSet['id]`
 * `firstName: dataSet['firstName']`
 * `lastName: dataSet['lastName']`
 */

// For of - Arrays
const arrayData = [2, 23, 4, ["asd", "gsaf", { firstName: "John", lastName: "Doe" }]];

for (const iterator of arrayData) {
  console.log(iterator);
}

for (let i = 0; i < arrayData.length; i++) {
  console.log(arrayData[i]);
}
