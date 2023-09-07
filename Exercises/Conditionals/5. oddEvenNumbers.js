console.log("<=== oddEvenNumbers ===>");
console.log("");

/**
 * function takes parameter (limit)
 * when arg (10) is passed after calling.
 * it should show print all numbers from 0 - 10
 * next it display if "EVEN" or "ODD"
 */

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 == 0) {
      console.log(i, "EVEN");
    }
    if (i % 2 == 1 || 0) {
      console.log(i, "ODD");
    }
  }
}
console.log("");

// Mosh Way!

showNumbers2(10)

function showNumbers2(limit) {
  for(let i =0; i <= limit; i++) {
    const message = (i % 2 ==0)? "EVEN":"ODD"
    console.log(i, message)
  }
}