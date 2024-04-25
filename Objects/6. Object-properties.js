const circle = {
  radius: 1,
  draw() {
    console.log("Circle complete!");
  },
};

// For-in loop on Objects
for (let key in circle) {
  console.log(key, circle[key]);
}

// For-of loop on Object keys
for (let key of Object.keys(circle)) {
  console.log(key);
}

// For-of loop on Object entries
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

// Check if a property exists in an object
if ("radius" in circle) console.log("yes");
