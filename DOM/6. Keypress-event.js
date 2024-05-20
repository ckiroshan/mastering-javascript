console.log("<=== DOM Keypress events ===>");

// Keypress
const input = document.querySelector(".name");

input.addEventListener("keypress", (e) => {
  console.log(e.key);
});

// Mouse events
const mainHeading = document.querySelector("#heading-primary");

mainHeading.addEventListener("mouseover", (e) => {
  mainHeading.style.color = "var(--element-color)";
});

mainHeading.addEventListener("mouseout", (e) => {
  mainHeading.style.color = "";
});
