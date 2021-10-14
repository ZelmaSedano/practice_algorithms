const rotateLeft = (arr, num) => {
  // slice at d, concat slice from 0 to d onto arr
  let result = arr.slice(num).concat(a.slice(0,num));
  return result
}

console.log()
