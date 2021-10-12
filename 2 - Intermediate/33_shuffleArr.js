// create a function that shuffles the elements in an array 
// 123456 -> 1,4,2,5,3,6 (split the array into x's (first half) & y's (2nd half))
// then alternate b/w x & y numbers
// num is where you split the array in half
function shuffleArr(arr, num) {
  // split the array in half
  let firstHalf = arr.slice(0,num);
  let secondHalf = arr.slice(num, arr.length);

  // create a variable to hold the result of alternating x & y nums
  let result = [];

  // loop through firstHalf array
  for(let i = 0; i < firstHalf.length; i++) {
    // push current num from x's and current num from y's into result
    result.push(firstHalf[i], secondHalf[i]);
  }

  return result;
}

console.log(shuffleArr([1,2,3,4,5,6],3));
