// create a function that finds the first non-repeating element in a given string
// you want to loop through the array and while in the loop count how many times each eleemnt is present by comparing w/ an inner j loop
function firstNonRepeat(str) {
  // loop through the entire string
  for (let i = 0; i < str.length; i++) {
    // create a counter variable
    let counter = 0;

    // loop through the string again, without skipping 0
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        // if the letters match (which they will)
        counter++; // add to the counter variable
      } // every letter will have one occurrence, but some will have two
    }

    // check the counter while still in the outer loop
    if (counter === 1) {
      return str[i];
    }
  }
}

console.log(firstNonRepeat('hahab')); // b is the first non-repeating element
