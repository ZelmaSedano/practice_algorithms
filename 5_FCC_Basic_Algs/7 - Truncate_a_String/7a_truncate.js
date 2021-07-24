// create a function that truncates/shortens a given string so that it's not longer than the given number of letters
function truncateString(str, num) {
  // make sure string is longer than the num
  if (str.length > num) {
    // slice 0 index to num
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

console.log(truncateString('hahaha', 3));
