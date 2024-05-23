console.log("<=== Promises ===>");

// Modern way of writing Asynchronous code.

function registerUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Registration form is filled");
      resolve();
    }, 3000);
  });
}

function sendOTP() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("OTP request failed, please try again later");
      console.log("One Time Password has been sent");
    }, 4000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User logged in successfully");
      resolve();
    }, 3000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting User Data");
      resolve();
    }, 9000);
  });
}

function DisplayUserData() {
  setTimeout(() => {
    console.log("Displaying User Data");
  }, 8000);
}

console.log("===== Other processes =====");
console.log("Loading Other User Data");

registerUser()
  .then(sendOTP)
  .then(login)
  .then(getUserData)
  .then(DisplayUserData)
  .catch((error) => {
    console.error("Error: " + error);
  });
