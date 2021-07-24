// create a function that takes a multi-D array and returns the largest number from each subarray in a new array
function largestOfFour(arr) {
  // create an empty array to hold the results
  let result = [];

  // loop through the outer array (i times)
  for (let i = 0; i < arr.length; i++) {
    // create a variable to hold the current iteration's largest num
    let largest = 0;

    // loop through the inner array (arr[i]) j times
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }

    // outside of the 2nd loop, add the current iteration's largest number to result
    result.push(largest);
  }

  // return result
  return result;
}
