// create a function that counts the number of valid words in a string
// a valid word is a word that doesn't start with !
function countValidWords(str) {
  // create a counter to count the number of valid words
  let count = 0;

  // split the string into a collection of words
  let arr = str.split(' ');

  // loop through the array
  for(let i = 0; i < arr.length; i++) { 
    // let firstLetter = arr[i][0];
    if(arr[i][0].search(/[1-9!@#_?]/) === -1) {
      count++;
    }
  }

  return `There are ${count} valid words in this string`;
}

console.log(countValidWords('!ha this is a valid !word'));
