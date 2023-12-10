function wordCount(str) {
  // edgecase: if string is empty or just spaces
  if(str.trim().length == 0) {
    return 'please enter a valid string';
  }

  // split the string into an array of words
  // make sure to trim off any trailing spaces
  let words = str.trim().split(' ');
  
  // return the length of the array
  return words.length;
}

console.log(wordCount('hi there b d f '))
