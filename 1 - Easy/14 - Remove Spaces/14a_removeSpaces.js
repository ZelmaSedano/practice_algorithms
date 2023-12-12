removeSpaces = (str) => {
  // if string is empty or just spaces
  if(str.trim().length == 0) {
    return 'please enter a valid string';
  }

  return str.split(' ').join('');
}

console.log(removeSpaces('hi there'));
