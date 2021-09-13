// find duplicates
function findDupes(arr) {
  // create an empty array to holds dupes
  let result = [];

  // loop through the array i times
  for (let i = 0; i < arr.length; i++) {
    // loop through the array j times
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}

console.log(findDupes([1, 2, 3, 4, 1, 2, 3]));
