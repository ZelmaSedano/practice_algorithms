// create a function that returns the duplicates from an array
function findDupes(arr) {
  // create an empty array to hold dupes
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // make sure to skip i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}

console.log(findDupes([1, 2, 3, 1]));
