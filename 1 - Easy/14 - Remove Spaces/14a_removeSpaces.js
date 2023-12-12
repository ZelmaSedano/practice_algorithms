sortLetters = (str) => {
  // edgecase: if string is empty or just spaces
  if(str.trim().length== 0) {
    return 'please enter a valid string';
  }

  // MAKE SURE TO REMOVE ALL SPACES - split the string into an array of words, this removes the spaces, and join it
  let newStr = str.split(' ').join('');
  return newStr.split('').sort().join('');
}

console.log(sortLetters('hi there'))
