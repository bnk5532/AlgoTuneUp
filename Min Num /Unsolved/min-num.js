// Write code to return the largest number in the given array

//define minNum variable
//write function that takes in an array
//loop over length of array
//write condition for minNum => currentNum, etc.
//variable for result should lowest number in given array

var minNum = function(arr) {
  var min = arr[0]

  for (i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    
    if (currentNum < min) {
      min = currentNum;
      console.log(min);
      //only prints number if lower than previous numbers due to currentNum > max comparison
    }
  }
  return min;
  
}