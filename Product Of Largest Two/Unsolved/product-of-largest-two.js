// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

//define variable for productOfLargestTwo
//write function to accept array
//define variables for largest and secondLargest.
//loop over length of array using similar if statement as max-num problem
//or sort array largest to smallest, then select index 0 and 1.
//write function for largestNum * secondLargest
//return product of index 1 & 2.

var productOfLargestTwo = function (arr) {
  var largest = null;
  var secondLargest = null;

  for (let i = 0; i < arr.length; i++) {
    var currentNum = arr[i];

    if (currentNum > largest || largest === null) {
      secondLargest = largest;
      largest = currentNum;
      console.log(secondLargest, largest)
      //used else if to add new condition if first condition is false. Null object is falsy for both local variables.
    } else if (currentNum > secondLargest || secondLargest === null) {
      secondLargest = currentNum;
    }
  }
  return largest * secondLargest;
};
