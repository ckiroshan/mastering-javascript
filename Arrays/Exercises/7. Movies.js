console.log("<== Ex Get title of movies ==>");

/**
 * Create a function called getMax()
 * 1. Get all movies in 2018 with rating > 4.
 * 2. Sort them by rating (descending order) => bigger on top.
 * 3. Pick the title property & display in console.
 * */

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.1 },
];

// All movies in 2018 with rating > 4.
const movieTitles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(movieTitles);

