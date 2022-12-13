/*
    1. loop through array to find the index of what we want to remove 
    2. then use the splice function to remove that element 
    3. return the array 
  */
const removeFromArray = function (array, optionalArg) {
  // the following will set the optional argument as itself or the
  // "" default value
  optionalArg = optionalArg || "";

  // set up a remove array where we will load in the
  // arguments to be deleted
  let removeArray = [];

  // loop from the second argument onwards and load it into this removeArray
  for (let i = 1, j = 0; i < arguments.length; i++, j++) {
    removeArray[j] = arguments[i];
  }

  // loop through the array array and inside that loop through the removeArray
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < removeArray.length; j++) {
      // check if the element to delete is in our array, if it is
      // then go ahead and splice that index from our array and removeArray
      // then update i as i - 1 and j as j - 1, this being as splice function shifts down
      // the elements of the array and will skip the next element
      if (array[i] === removeArray[j]) {
        array.splice(i, 1);
        removeArray.splice(j, 1);
        i = i - 1;
        j = j - 1;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
