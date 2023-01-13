// Write code to create a function that returns the factorial of `num`

//define variable for factorial
//write function that takes in arg of num
//loop DOWN from/through given num. (if "4", then should loop down from 4 * 3 * 2 * 1, which will result in 24.)
//return result after loop completed, integers totalled in result variable.

var factorial = function (num) {
  var result = 1;

  for (i = num; i > 1; i--) {
    result = result * i;
  }
  return result;
};
