function repeatString(str, num) {
  // create a result variable to return
  result = '';

  // loop from 1 to num, including num
  for(let i = 1; i <= num; i++) {
    result = result + str;
  }

  return result;
}

console.log(repeatString('hi', 6))
