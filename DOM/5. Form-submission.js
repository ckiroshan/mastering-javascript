console.log("<=== DOM form submission events ===>");

// Submit
const button = document.querySelector(".newButton");
const submitText = document.querySelector("#log");

button.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentTime = e.timeStamp;
  submitText.innerHTML = `The form was submitted at Time: ${currentTime}`;
});
