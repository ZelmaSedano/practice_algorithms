// Implement a function called `betterFilter` that takes two arguments

// 1. the array to filter
// 2. A function that takes a single argument. This function is called with one individual element of the array. If the function returns true for that element, it is included in the result. If not, the element is not included in the filtered result.

// The return value should be an array containing only the items for which calling Parameter 2 returned true.

// It should not use the `.filter` function that already exists in JS

function betterFilter(arr, func) {
  // create an empty results array to return
  let results = [];

  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // if the current item in the array is also a result from the given fun (in our example, that's onlyEvens)
    if (func(arr[i])) {
      // if this item is present in func results, push
      results.push(arr[i]);
    }
  }

  return results;
}

// function to test
function onlyEvens(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// array to test
let numbers = [1, 2, 3, 4, 5];

console.log(betterFilter(numbers, onlyEvens));
// expected result = []
