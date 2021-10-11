// find the length of the longest word
function lengthLastWord(str) {
  // split the string into a collection of words, then trim off the end - this will ensure there is no trailing empty spaces
  let arr = str.split(' ').map(function(value) {
    return value.trim();
  })

  // loop backwards through the arr, so we can pop off the last element if it's empy
  for(let i = arr.length; i >= 0; i--) {
    // remove all the trailing spaces
    if(arr[i] === '') {
      arr.pop();
    }
  }

  // if string is empty, return -1
  if(str === '') {
    return -1;
  } else {
    // return the length of the last element
    return arr[arr.length-1].length;
  }

}

console.log(lengthLastWord('last word '));
