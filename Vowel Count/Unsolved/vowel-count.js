// Write code to return the the number of vowels in `str`

//define vowelCount variable
//write function that takes in a given string
//define empty array for results
//define vowels variable
//loop over string and total vowels

var vowelCount = function(str){

var result = 0
var vowels = ["a", "e", "i", "o", "u"]

for (let i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();
    //searches string for vowel match, if not matched, -1 otherwise +1 to result
    if (vowels.indexOf(letter) !== -1) {
        result +=1;
    }
    console.log(result)
}
return result;
}