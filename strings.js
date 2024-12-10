// This file contains the code to complete all tasks under the section 'Exploring String Manipulation in JavaScript'

console.log("Part 2");

// Task 1: Obtaining String Length

let message = "Enjoy your day!"; // create string (15 chars)
console.log(message); // log for verification

console.log(message.length); // get length of string and log for verification

// Task 2: Converting Cases

let text = "Hello, World!"; // create string with mixed cases
console.log(text); // log for verification

upperCaseText = text.toUpperCase(); // convert to upper case
console.log(upperCaseText); // log for verification

lowerCaseText = text.toLowerCase(); // convert to lower case
console.log(lowerCaseText); // log for verification

// Task 3: Extracting Substrings

let sentence = "The quick brown fox jumps over the lazy dog"; // create sentence as a string
console.log(sentence); // log for verification

subStringSentence = sentence.substring(10, 25); // create sub string "brown fox jumps"
console.log(subStringSentence); // log for verification

// Task 4: Splitting Strings

let newString = "The quick brown fox"; // create new string with words separated by spaces
console.log(newString); // log for verification

splitString = newString.split(" ") //  split new string at spaces
console.log(splitString); // log for verification
