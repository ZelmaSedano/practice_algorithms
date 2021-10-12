// create a function that sorts an array
function sortArr(arr) {
  let result = arr.sort((a,b) => a-b);
  return result;
}

console.log(sortArr([3,33,3333,2,45]));
