// sort letters
function sortLetters(str) {
  // remove whitespace
  let arr = str.match(/[a-zA-Z]+/g);

  let newStr = arr.join('');

  let newArr = newStr.split('');

  let sorted = newArr.sort();

  return sorted;
}

console.log(sortLetters('hi there'));
