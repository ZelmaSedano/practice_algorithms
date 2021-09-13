// create a function that returns the missing number in a series of numbers from an array
function findMissingNum(arr) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // if next num isn't current num + 1, replace it
    if (arr[i + 1] !== arr[i] + 1) {
      // returns the missing number in its proper place
      return arr[i] + 1;
    }
  }
}

console.log(findMissingNum([1, 2, 3, 5]));
