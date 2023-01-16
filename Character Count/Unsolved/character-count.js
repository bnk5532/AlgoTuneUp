// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

//define variable for characterCount
//write function that takes in a string
//create charMap object
//use charMap method to create a key for the letter and count
//loop over the length of the string
//use if/else conditional to iterate over the letter count
//return object for charMap after loop complete

var characterCount = function (str) {
  var charMap = {};

  for (let i = 0; i < str.length; i++) {
    var char = str[i];
    // console.log(str)
    // console.log(char)
    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  //   console.log(charMap)
  return charMap;
};
