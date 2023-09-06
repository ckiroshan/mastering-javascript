console.log("<=== Landscape or Portrait ===>");
console.log("");

/**
 * Write a function
 * That takes 2 parameters
 * Returns true if image is landscape. (width > height)
 * else its false (portrait)
 * Call the function & pass the arguments.
 * */

function isLandscape(width, height) {
  // return (width > height) ? true : false;
  return (width > height)
  // Both lines do same thing. Better to use this one instead of above one.
}

console.log(`Is the image Landscape? ${isLandscape(20, 10)}`);
console.log(`Is the image Landscape? ${isLandscape(10, 20)}`);
console.log(`Is the image Landscape? ${isLandscape(10, 10)}`);
