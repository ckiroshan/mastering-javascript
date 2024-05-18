console.log("<=== Access elements in DOM ===>");

// By Tag name
const allH1 = document.getElementsByTagName("h1");
console.log(allH1); // Gets all h1 elements
console.log(allH1[0]); // Gets h1 element at index 0

// By ID
const h1byID = document.getElementById("another-paragraph");
console.log(h1byID); // Gets element by given ID

// By Class Name
const anchorByClass = document.getElementsByClassName("special-link");
console.log(anchorByClass); // Gets element by given Class Name

// By QuerySelector
const mainHeading = document.querySelector("#heading-primary");
const h1Class = document.querySelector(".h1-primary");
const firstParagraph = document.querySelector("p");
console.log(mainHeading);
console.log(h1Class);
console.log(firstParagraph);

// By QuerySelectorAll - selects all elements
const allAnchors = document.querySelectorAll("a");
console.log(allAnchors);

// Access Parent Element
const newHeading = document.querySelector(".container-heading");
console.log(newHeading.parentNode);

// Access next sibling element
console.log(newHeading.nextElementSibling);

// Access previous sibling element
console.log(newHeading.previousElementSibling);

// Access Child Elements
const newContainer = document.querySelector(".container");
console.log(newContainer.childNodes);
