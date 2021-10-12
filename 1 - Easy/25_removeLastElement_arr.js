// remove the last element from a string
const removeLastStr = (str) => {
  // convert string into an array
  let arr = str.split('');
  // remove the last element
  arr.pop();
  return arr.join('');
}

console.log(removeLastStr('ha'));
