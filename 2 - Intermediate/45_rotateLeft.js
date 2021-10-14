const rotateLeft = (arr, num) => {
  // slice at d, concat slice from 0 to d onto arr
  // arr.slice(1 arg) = slices off 0 to num
  // slice off 1-3, then add 1-3 to the end of what's left
  let result = arr.slice(num).concat(arr.slice(0,num));
  return result
}

console.log(rotateLeft([1,2,3,4,5], 2));
