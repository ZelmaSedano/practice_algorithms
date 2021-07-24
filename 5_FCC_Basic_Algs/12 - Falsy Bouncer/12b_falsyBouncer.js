// create a function that removes all falsy values from a given array
// falsy values = false, null, 0, '', undefined, and NaN
// convert each value into a boolean

function falsyBouncer(arr) {
  // create an empty array
  let newArray = [];
  // loop through the given array
  for (let i = 0; i < arr.length; i++) {
    // if the element is truthy, we push it into array
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

console.log(falsyBouncer([NaN, 0, true, 1, false, 2]));
