// Write code to create a function that accepts a string and returns the string in camelCase

//define variable for camelCase
//write function that will take in a given string
//loop over the length of array
//need use to lowercase method to get all letters in string to lowercase to start.
//use uppercase method to capitalize first let of each word except for index 0.
//use method to join and/or trim spaces between words.
//return result

var camelCase = (str) => {
    var result = "";
    var words = str.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        var word = words[i]
        var letters = word.split("");
        
        if(i>0) {
            letters[0] = letters[0].toUpperCase();
        }
        result += letters.join("");
    }
};