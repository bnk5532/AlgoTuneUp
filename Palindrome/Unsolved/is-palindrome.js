// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

//define variable for isPalinedrome
//write function that takes in a string
//needs variable defined for string in reverse, so it can be compared to original string
//if/else to return true or false

var isPalindrome = function (str) {
  var reverse = str.split("").reverse().join("");
    console.log(reverse)
    console.log(str)
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
};
