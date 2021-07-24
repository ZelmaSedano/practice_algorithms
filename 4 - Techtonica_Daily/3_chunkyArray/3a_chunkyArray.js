// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array

function splitArrays(arr, num) {
  // use spread operator instead of directly assigning, 'cuz if you directly assign it, it'll change the arr
  let newArray = [...arr];
  // create an empty array to hold the result
  let result = [];

  // Ex: ([1,2,3,4,5,6,7,8,9,10], 4)
  // take 4 items out of the array [1, 2, 3, 4], push it into result array, and loop
  // each loop the array will get shorter, because splice CHANGES the array it's working with
  let i = 0;
  while (newArray.length > 0) {
    // take indexes 0 to num (not including num) and push it into result (splice creates new array)
    result.push(newArray.splice(0, num));
    // incrememnt
    i++;
  }
  // return the result
  return result;
}

console.log(
  splitArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4)
);
