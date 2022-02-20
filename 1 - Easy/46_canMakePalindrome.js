// check to see if a given string can make a palindrome
// a string that can make a palindrome can have an infinite amount of even letters, but ONLY ONE ODD NUMBER THAT CAN BE IN THE MIDDLE
function checkPalindrome(str) {
  // create empty object to hold key/value pairs
  let obj = {};

  // loop through str; if letter isn't in obj, add it w/ value of 1; if it is in obj, add to its value by 1
  for(let char of str) {
    if(!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  // console.log(obj);

  // declare odd array
  let oddArr = [];
  // loop through the obj; if the value is odd, add to odd array
  for(let value in obj) {
    if(obj[value] % 2 === 1) {
      oddArr.push(obj[value]);
    }
  }

  // console.log(oddArr);

  // if length of odd array is longer than 1, return false
  return oddArr.length <= 1;
}

console.log(checkPalindrome('carrace'));  // true
console.log(checkPalindrome('techtonica')); // false
console.log(checkPalindrome('babat'));  // true
