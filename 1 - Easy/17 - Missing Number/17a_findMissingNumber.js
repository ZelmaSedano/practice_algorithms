// create a function that finds the missing number in an array
function findMissinNum(arr) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // if current element's next element isn't current element + 1
    if (arr[i + 1] !== arr[i] + 1) {
      // then return that missing num
      return arr[i] + 1;
    }
  }
}

console.log(findMissinNum([1, 2, 4, 5]));
