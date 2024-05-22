console.log("<=== Callback Hell ===>");

// This is one way of achieving Asynchronous code.
// But it is not recommended due to callback hell.

// cb = callback function
function registerUser(cb) {
  setTimeout(() => {
    console.log("Registration form is filled");
    cb();
  }, 3000);
}

function sendOTP(cb) {
  setTimeout(() => {
    console.log("One Time Password has been sent");
    cb();
  }, 4000);
}

function login(cb) {
  setTimeout(() => {
    console.log("User logged in successfully");
    cb();
  }, 3000);
}

function getUserData(cb) {
  setTimeout(() => {
    console.log("Getting User Data");
    cb();
  }, 9000);
}

function DisplayUserData() {
  setTimeout(() => {
    console.log("Displaying User Data");
  }, 8000);
}

registerUser(() => {
  sendOTP(() => {
    login(() => {
      getUserData(() => {
        DisplayUserData();
      });
    });
  });
});

console.log("===== Other processes =====");
console.log("Loading Other User Data");
