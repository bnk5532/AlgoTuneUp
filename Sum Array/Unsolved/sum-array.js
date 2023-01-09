// Write code to add all the numbers in `arr` and return the total

//define sumArray
//write function for sumArray
//pass arg of arr to sumArray
//loop over length of array
//total value of indexes in new variable of results

var sumArray = function (arr) {
  //needed step for defining result and to begin at 0.
  var result = 0;

  for (let i = 0; i < arr.length; i++) {
    var currentNum = arr[i];
    result += currentNum;
  }
  return result;
};
