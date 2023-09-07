console.log("<=== string Properties ===>");
console.log("");

/**
 * function 'showProperties' takes parameter (object)
 * display the string properties of this object.
 * if array = [1,2,3,4]. Output: 4
 * if array = [1,null, undefined, 2,3,4]. Output: 4
 */

const movie = {
  title: "King Kong",
  releaseYear: 2006,
  rating: 8.0,
  director: "James Cameron",
};

/**
 *  Output:
 *  title King Kong
 *  director James Cameron
 */

showProperties(movie)

function showProperties(object) {
  for (let key in object) {
    if(typeof(object[key]) == 'string') {
      console.log(key, object[key]);
    }
  }
}

/*
for (let key in person) {
  console.log(key, person[key]);

}
*/
