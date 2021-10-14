const rotateLeft = (arr, num) => {
  // slice at d, concat slice from 0 to d onto arr
  // arr.slice(1 arg) = slices off 0 to num
  let result = arr.slice(num).concat(a.slice(0,num));
  return result
}

console.log()
