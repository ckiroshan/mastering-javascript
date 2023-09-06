console.log("<=== demeritPoints ===>");
console.log("");

/**
 * Function takes parameter (speed)
 * Speed Limit = 70kmph
 * If Car speed <= 70kmph : Ok
 * Every 5kmph exceeding speed limit, they get 1 point.
 * So Car speed = 72kmph : Ok
 * But If car speed = 75kmph : 1 Point
 * (Use Math.floor for point calculation)
 * If points >= 12 : License suspended!
 * */

let carSpeed = checkSpeed(70);
console.log(carSpeed);
carSpeed = checkSpeed(75);
console.log(carSpeed);
carSpeed = checkSpeed(100);
console.log(carSpeed);
carSpeed = checkSpeed(130);
console.log(carSpeed);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (speed < speedLimit + kmPerPoint) {
    return "Ok";
  }
  if (points >= 12) {
    return "License suspended!";
  }
  if (points == 1) {
    return points + " point";
  }
  return points + " points";
}
