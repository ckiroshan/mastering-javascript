console.log("<=== Spread & Rest operators ===>");

// Rest Operator
function numbers(a, b, ...nums) {
  console.log(a, b, nums); // 1 2 (4) [3, 4, 5, 6]

  nums.forEach((i) => {
    // forEach method on nums array
    console.log(i);
  });
}

numbers(1, 2, 3, 4, 5, 6);

// Spread Operator

// Arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = ["a", "b", "c", "d"];

const superArray = [...array1, ...array2];
console.log(superArray); // [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd']

// Objects
const object1 = { id: 1, data: 12313 };
const object2 = { name: "Kane", age: 22 };

const superObject = { ...object1, ...object2 };
console.log(superObject); // {id: 1, data: 12313, name: 'Kane', age: 22}
