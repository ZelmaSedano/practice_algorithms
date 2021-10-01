// create a function that checks to see if a number is a prime
function isNumPrime(num) {
  // fast-fail: if num is 1, then return false
  if(num === 1) {
    return false;
  } else {
    // loop from 2 to number, not including num, and see if any of the numbers b/w 2 & it divide into it; if one does, it's not a prime
    for(let i = 2; i < num; i++) {
      // if any number divides into num
      if(num % i === 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(isNumPrime(23));
