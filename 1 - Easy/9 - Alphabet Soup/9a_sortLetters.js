function sortLetters(str) {
  // edgecase: if string is empty or just spaces
  if(str.trim().length == 0) {
    return 'please enter a valid string';
  }

  let letters = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i] != ' ') {
      letters.push(str[i])
    }
  }

  return letters.sort().join('');
}

console.log(sortLetters('how are you'))
