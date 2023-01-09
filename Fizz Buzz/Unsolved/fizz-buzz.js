// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

//define variable for fizzBuzz
//write function for fizzBuss
//pass function arg of arr for random array of numbers coming in
//loop over the length of the given array
//write if/else statement for 3 scenarios
//print fizz, buzz or fizz buzz respectively else print number

var fizzBuzz = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    var currentNum = arr[i];

    if (currentNum % 15 === 0) {
      console.log("Fizz-Buzz");
    } else if (currentNum % 3 === 0) {
      console.log("Fizz");
    } else if (currentNum % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(currentNum);
    }
  }
};
