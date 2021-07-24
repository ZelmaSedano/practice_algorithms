// create a function that takes an array and splits it into GROUPS the length of 'size' (2nd arg), then returns them as a 2D array
// ex: ([1,2,3,4], 2) = [1,2],[3,4]
// ex: ([0,1,2,3,4,5], 3) = [1,2,3], [3,4,5]
// ex: ([0,1,2,3,4,5], 2) = [1,2], [3,4], [5,6]
function chunkyMonkey(arr, size) {
  // create an empty variable to hold the arrays
  let result = [];

  // loop through the array, iterating by the value of size
  for (let i = 0; i < arr.length; i += size) {
    // push each new, separated array into result, starting at point i (0 then whatever size is), from i to size (not including size)
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd', 'e', 'f'], 3));
