// Write code to return the largest number in the given array

//define maxNum variable
//write function that takes in an array
//loop over length of array
//write condition for maxNum => currentNum, etc.
//variable for result should greatest number in given array

var maxNum = function(arr) {
  var max = arr[0]

  for (i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    
    if (currentNum > max) {
      max = currentNum;
      console.log(max);
      //only prints number if larger than previous numbers due to currentNum > max comparison
    }
  }
  return max;
  
}