// create a function that returns the first element that is true based off a given function
// this case, the function checks to see if a number is even
function truthTest(arr, func) {
  // create a variable called num whose value is 0
  let num = 0;

  // loop through the array of numbers
  for (let i = 0; i < arr.length; i++) {
    // reset the value of num to whatever the current integer is
    num = arr[i];
    // if the current num is passed into the function returns true, then return num as value
    if (func(num)) {
      return num;
    }
  }

  // if none of the numbers from the array evaluate to true (in this case, if none of them are even), then return undefined
  return undefined;
}

console.log(truthTest([1, 2, 3, 4], (num) => num % 2 === 0));
