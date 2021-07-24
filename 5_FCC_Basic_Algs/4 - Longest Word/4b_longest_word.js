// create a function that returns the longest word in a given string
function longestWord(str) {
  // split the string into an array of words
  arr = str.split(' ');

  // create a variable to hold the largest word
  largest = '';

  // loop through the array of words, checking the length of each word against the length of longest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > largest.length) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(longestWord('jose is a handsome man'));
