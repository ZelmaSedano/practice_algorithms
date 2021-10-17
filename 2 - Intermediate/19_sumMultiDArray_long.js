// create a function that sums the elements of an array
function sumArrays(arr) {
  // create an empty variable to hold the sum
  let sum = 0;
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // if the current
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    } else if (Array.isArray(arr[i])) {
      sum += sumArrays(arr[i]);
    }
  }
  return sum;
}

console.log(sumArrays([1, 2, 3, [4, 5, [6]]]));

