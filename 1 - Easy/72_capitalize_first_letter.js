function capitalizeFirstLetter(str) {
  // 1) edgecase: if string is empty
  if(str == '' || str == ' ') {
    return false
  }

  // split the string into words
  words = str.split(' ')

  // loop through the words wordsay
  for(let i = 0; i < words.length; i++) {
    // hi --> Hi
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // return
  return words.join(' ')
}

console.log(capitalizeFirstLetter(''))
