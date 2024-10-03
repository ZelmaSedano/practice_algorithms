const wordCount = str => {
  let words = str.trim().split(' ')

  return words.length;
}

console.log(wordCount(' hi there'))
