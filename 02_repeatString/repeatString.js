const repeatString = function (string, num) {
  // if the number is negative then we go ahead and
  // print out an error message on the console
  if (num < 0) {
    return "ERROR";
  }
  // create an empty string to hold to resulting string
  let resultString = "";

  // loop through the array num times and add string to the
  // array
  for (let i = 0; i < num; i++) {
    resultString += string;
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
