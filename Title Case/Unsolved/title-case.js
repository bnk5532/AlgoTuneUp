// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

//define variable for titleCase
//write function to take in a given string
//use split method to break up string into individual letters
//need to define variable that identifies a word
//use upperCase method to uppercase only first letter of word at index 0 of that word
//need to join word into new array for final result.
//return final result.

var titleCase = function(str){
    //new array for new string after capitalization
    var result = [];
    //split method to separate words in array - space in line 15 required or it will split into individual letters
    var words = str.split(' ');
    console.log(words)

    for (let i = 0; i < words.length; i++) {
        //split method here has no space, b/c now individual words are separated, the individual letters are separated.
        var word = words[i].split('');
        //after word split to individual letters in a word, index 0 is capitalized.
        word[0] = word[0].toUpperCase();
        console.log(word)
        //reverse splits with joins, no space, then single spaced to join letters into words, then words into complete string.
        result.push(word.join(''));
        
    }
    return result.join(' ');
}