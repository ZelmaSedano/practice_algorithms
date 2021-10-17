// create a function that returns the length of the last word, ignoring all white spaces that would add to the length
function lengthLastWord(str) {
  // split the string into a collection of words and remove all white spaces
  let arr = str.match(/[a-zA-Z]+/g);

  return arr[arr.length - 1].length;
}

console.log(lengthLastWord('lentth of  last  word      '));
