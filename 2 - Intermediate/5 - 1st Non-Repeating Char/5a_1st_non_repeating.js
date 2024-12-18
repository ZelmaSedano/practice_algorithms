// create a function that returns the first non-repeating character
function firstNonRepeatingChar(str) {
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    // indexOf returns the index of an element
    // lastIndexOf returns the last occurrence of an element
    // check to see if the current element's location in the array is the same as the last time it occurred
    // if it only occurs once, then they have the same index/location
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null; // Return null if no non-repeating character is found
}

// Example usage:
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
