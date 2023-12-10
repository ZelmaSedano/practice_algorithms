function firstNonRepeatingCharacter(str) {
  // edgecase: if string is empty or just spaces
  if(str.trim().length == 0) {
    return 'please enter a valid string';
  }
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) == i && str.indexOf(str[i], i + 1) == -1) {
      return str[i];
    }
  }
  return "no non-repeating letters";
}

console.log(firstNonRepeatingCharacter('dkdkdkdsn'))
