const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let baseSolve = 7;
  let result = {
    turns: 7,
    seconds: 0,
  }

  if (disksNumber > 3) {

    for (let i = 3; i < disksNumber; i++) {

      result.turns += Math.pow(2, i)

    }
  } else if (disksNumber === 2) {
    result.turns = 3;
  }

  let speedSeconds = turnsSpeed / 3600;
  result.seconds = Math.floor(result.turns / speedSeconds);

  return result;
};
