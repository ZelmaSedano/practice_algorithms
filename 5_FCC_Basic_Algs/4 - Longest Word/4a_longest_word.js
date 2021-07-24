function largestOfFour(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    var largest = 0;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    newArr.push(largest);
  }
  // You can do this!
  return newArr;
}

console.log(
  largestOfFour([
    [1, 2, 3],
    [3, 4, 5],
  ])
);
