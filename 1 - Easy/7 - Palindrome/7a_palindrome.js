// create a function that checks to see if a given string is a palindrome
function palindrome(str) {
  // create reversed version
  let reversed = str.split('').reverse().join('');

  return reversed === str;
}

console.log(palindrome('mow'));
