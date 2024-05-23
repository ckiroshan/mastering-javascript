console.log("<=== Async Promises ===>");

// Modern way of writing a Promise.

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
      return reject("OTP request failed, please try again later!");
      console.log("One Time Password has been sent");
      resolve();
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
    }, 3000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Displaying User Data");
      resolve();
    }, 4000);
  });
}

console.log("===== Other processes =====");
console.log("Loading Other User Data");

async function authenticateUsers() {
  try {
    await registerUser();
    await sendOTP();
    await login();
    await getUserData();
    await displayUserData();
  } catch (error) {
    console.log("Error: " + err);
  }
}

authenticateUsers()
  .then(() => {
    console.log("All tasks executed successfully");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
