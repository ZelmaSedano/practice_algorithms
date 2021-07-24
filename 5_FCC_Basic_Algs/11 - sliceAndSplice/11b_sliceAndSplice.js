// create a function that capitalizes the first letter of every word
function letterCapitalize(str) {
  // split the string into an array of words
  let arr = str.split(' ');

  // loop through the array of words, targeting the first letter of each word and replacing it with its capitalized version of itself
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  // return the string with its letters capitalized by joining the array back into a string
  return arr.join(' ');
}

console.log(letterCapitalize('no way jose'));
