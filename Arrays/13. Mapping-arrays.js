console.log("<== Mapping Arrays ==>");

const numbers = [5, 7, 1, -30, 9, 8, -1];

// Filter array with only positive numbers
const filtered = numbers.filter((value) => value >= 0);

// Map elements to an HTML list array
const items = filtered.map((value) => "<li>" + value + "</li>");
console.log(items);

// Join HTML list and make a String
const stringItems = "<ul>" + items.join("") + "</ul>";
console.log(stringItems);

