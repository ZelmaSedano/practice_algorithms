// binary search only works w/ sorted arrays
// return the index of the target variable
function binarySearch(arr, target){
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if (arr[middle] === target) {
          // found the target
          return 'index: '+ middle;
        // if middle is less than target, increment start by 1
      } else if (arr[middle] < target) {
          // continue searching to the right
          start = middle + 1;
        // else decrement end
      } else {
          // search searching to the left
          end = middle - 1;
      }
  }
// target wasn't found
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 1)); // 3, b/c 4 is at index 3
