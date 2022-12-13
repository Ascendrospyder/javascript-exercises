const reverseString = function (string) {
  // create an empty string to hold the result
  let result = "";

  // loop through the string, starting from the end to
  // the start and add the elements to our result string
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
