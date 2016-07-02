// This is the file where you will write the Truncate Words function and related code.
// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.

"use strict";
// Within the truncateWords() Function, complete the following steps:
//function defined without numWords
var truncateWords = function(longText, wordLimit) {
  // Use the split() function to split the String into an Array
  var longTextArray = longText.split(' ');
  console.log (longTextArray);
  //Use the length attribute to find the number of words in the 
  var textLength= longTextArray.length;
  console.log (textLength);
  //Determine how many words should be removed from the String
  var wordsToRemove= textLength-wordLimit;
  //removing the extra words, starting with the last word that needs to be left in the array
  longTextArray.splice (wordLimit, wordsToRemove);
  //adds the ellipses to the end of the truncated string
  longTextArray.push ('...');
  console.log(longTextArray);
  // Use the join() function to convert the Array back into a String
  var truncatedText= longTextArray.join (' ');
  // Return the truncated String from the Function
  return truncatedText
}

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);


"use strict";

//fuction that truncates the text by letter
var truncateLetters = function(longText, numLetters) {
  // Use the split() function to split the String into an Array
  var longTextArray = longText.split('');
  console.log (longTextArray);
  //Use the length attribute to find the number of letters in the array
  var textLength= longTextArray.length;
  console.log (textLength);
  //Determine how many letters should be removed from the String
  var lettersToRemove= textLength-numLetters;
  //removing the extra letters, starting with the last word that needs to be left in the array
  longTextArray.splice (letterLimit, lettersToRemove);
  //adds the ellipses to the end of the truncated string
  longTextArray.push ('...');
  console.log(longTextArray);
  // Use the join() function to convert the Array back into a String
  var truncatedText= longTextArray.join ('');
  // Return the truncated String from the Function
  return truncatedText
}

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var letterLimit = 45;
var wordCount= originalText.length;
var shortText = truncateLetters(originalText, letterLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);

