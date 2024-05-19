console.log("<=== Create elements in DOM ===>");

// Selectors
const body = document.querySelector("body");

// Creating an element
const div = document.createElement("div");
const p = document.createElement("p");
const image = document.createElement("img");

// Adding content to element
p.innerHTML = "This is a new paragraph";
image.src = "image.jpg";
image.alt = "A random image from Unsplash!";

// Placing element on parent (Append)
body.appendChild(div);
div.appendChild(p);
div.appendChild(image);

// Adding class,ID to an element
p.classList.add("p-text", "active");
image.classList.add("img-mod");
p.setAttribute("id", "unique-text");
