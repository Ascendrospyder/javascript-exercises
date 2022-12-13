const repeatString = function (string, num) {
  // create an empty array to hold to resulting string
  let resultString = [];

  // loop through the array num times and add string to the
  // array
  for (let i = 0; i < num; i++) {
    resultString += string;
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
