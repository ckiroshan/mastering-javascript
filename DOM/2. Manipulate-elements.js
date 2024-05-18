console.log("<=== Manipulate elements in DOM ===>");

// Change element content
const head = document.querySelector(".h1-primary");
head.innerHTML = "This heading has now been modified!";

// Change element style
head.style.backgroundColor = "orange";
head.style.color = "white";
head.style.fontSize = "50px";

// Add a CSS class
head.classList.add("active");
head.classList.remove("h1-primary");
