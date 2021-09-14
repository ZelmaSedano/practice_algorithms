// create a function that finds the first non-repeating letter in a string
function firstNonRepeat(str) {
  // loop through the string i times
  for (let i = 0; i < str.length; i++) {
    // create a counter variable to hold count for each letter
    let counter = 0;

    // loop through the string again, checking how many times each letter shows up
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        counter++;
      }
    }

    if (counter === 1) {
      return str[i];
    }
  }
  return 'no non-repeats';
}

console.log(firstNonRepeat('abca'));
