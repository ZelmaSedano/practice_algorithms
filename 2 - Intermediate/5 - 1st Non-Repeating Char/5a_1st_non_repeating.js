// The most recent code I've been working on are mostly code challenges
// I've been trying to optimize them so that they are one-line solutions
function firstNonRepeatingCharacter(str) {
  // edgecase: if string is empty or just spaces
  if(str.trim().length == 0) {
    return 'please enter a valid string';
  }
  
  for (let i = 0; i < str.length; i++) {
    // loop through the string
    // if the current char DOESN'T appear more than once, return that character
    if (str.indexOf(str[i], i + 1) == -1) {
      return str[i];
    }
  }

  // backup if there are no non-repeating characters
  return "no non-repeating letters";
}

console.log(firstNonRepeatingCharacter('adbbac'))
