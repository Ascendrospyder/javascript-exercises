/*
  steps: 
  1. set up a new sum variable which will hold the result 
  2. find the length of the loop by running from low to high (inclusive)
  3. at every iteration add the number to the sum 
*/
const sumAll = function (low, high) {
  // the following will check if the parameters are negative or
  // their types do not match a number
  if (low < 0 || high < 0) {
    return "ERROR";
  } else if (typeof low !== "number" || typeof high !== "number") {
    return "ERROR";
  }

  // keep track of the result by setting up a variable
  let result = 0;

  if (low <= high) {
    for (let i = low; i <= high; i++) {
      result += i;
    }
    return result;
  } else {
    for (let i = high; i <= low; i++) {
      result += i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
