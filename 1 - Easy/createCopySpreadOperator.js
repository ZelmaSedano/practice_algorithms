// in functional programming, you never want to alter the original array, you want to create a copy, then alter that 
// 1) create a function that adds a number to the array without altering the original

let array = [1,2,3,4];

function alter(arr) {
  let newArr = [...arr];
  newArr.push(5);

  return newArr;
  
}

console.log(alter(array));
