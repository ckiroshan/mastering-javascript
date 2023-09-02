// Switch case statements

let role = "admin";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  case "admin":
    console.log("Admin User");
    break;
  default: {
    console.log("Unknown User");
  }
}

// Same code in if/else statement

role = "moderator";

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else if (role === "admin") console.log("Admin User");
else console.log("Unknown User");
