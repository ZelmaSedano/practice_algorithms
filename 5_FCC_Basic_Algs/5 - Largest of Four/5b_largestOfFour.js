function largestOfFour(arr) {
  // create an empty array to hold the result
  var result = [];
  for (i = 0; i < arr.length; i++) {
    var largest = 0;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    result.push(largest);
  }
  // You can do this!
  return result;
}

console.log(
  largestOfFour([
    [1, 2, 3],
    [3, 4, 5],
  ])
);
