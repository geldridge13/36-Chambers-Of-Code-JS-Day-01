class Problem {
    /**
 * Have the wordCount(input) take the str string parameter being passed
 * and return the number of words the string contains
 * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
 * separated by single spaces.
 */
wordCount(input) {
    //create a new variable and split at the spaces for the length of the string
    let count = input.split(' ').length;
    //call the variable count
    return count;
}
/**
 * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first
 letter of each word. Words will be separated by only one space.
*
*/
letterCapitalize(str) {
    //create new variable
    let splitString = str.split(' ');
    //create for loop which would loop through the string at each space and convert the first letter to Upper Case
    for ( let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    //call
    return splitString.join(' ');
}
/**
 * Have the function firstReverse(String input) take the input parameter being passed and
 * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
 * program should return the string sredoC dna dlroW olleH.
 */
firstReverse(input){
    //create new variable and split given input
    let splitString = input.split("");
    //reverse the string
    let reverseString = splitString.reverse();
    //call and join the reversed string
    return reverseString.join("");
}
/**
 * Have the longestWord(String input) take the input parameter being passed and return the
 * largest word in the string. If there are two or more words that are the same length,
 * return the first word from the string with that length. Ignore punctuation and assume
 * input will not be empty.
 */
longestWord(input) {
    //match words through the string and put them into an array
    //loop through the array and find the longest word
   return input.match(/[a-zA-Z]+/g)
           .reduce(function(a,b){
                return a.length>=b.length?a:b;
           })
}
/**
 * Have the swapCase(String input) take the input parameter and swap the case of each
 * character. For example: if str is "Hello World" the output should be hELLO wORLD.
 * Let numbers and symbols stay the way they are.
 */
swapCase(str) {
    //create a variable to split the string
    //create a for loop that loops through the entrie length of the string
    //if lower case convert to Upper Case and visa versa
    //Join string
    //call variable
    let splitString = str.split("");
    for(let i = 0; i < splitString.length; i++) {
        if(splitString[i] === splitString[i].toLowerCase()) {
            splitString[i] = splitString[i].toUpperCase();
        } else {
            splitString[i] = splitString[i].toLowerCase();            }
    }
    return splitString.join("");
}
}
module.exports = Problem;