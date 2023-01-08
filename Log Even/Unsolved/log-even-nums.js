// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

//define variable for logEvenNums
//write function for num
//loop from 0 start by 1 num.
//end loop at last num.
//iterate at one whole num for each loop or by two since starting from zero and only logging even.
//use if to check even
//console.log results

var logEvenNums = function(num){
    for (i = 0; i <= num; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }
}

//alt below works by iterating by 2, which works when starting from index of 0, and seeking only even nums to print.

var logEvenNums = function (num) {
    for (var i = 0; i <= num; i += 2) {
      console.log(i);
    }
  };