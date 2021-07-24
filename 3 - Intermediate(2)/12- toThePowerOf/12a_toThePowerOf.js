// create a function that returns the number to the power of
// ex: function(base, exponent) = function(2, 2) = 4
function toThePowerOf(base, exponent) {
  // create an a variable to multiply by & return
  // 1 b/c you're multiplying it
  let result = 1;

  // loop from 0 (of 1?) to exponent, multiplying the result by base each time
  // toThePowerOf(4, 4) = (4*4*4*4) = 256
  for (let i = 0; i < exponent; i++) {
    // multiply result * base
    result *= base;
  }

  // after it's looped the number-of-exponent times, return the result
  return result;
}

console.log(toThePowerOf(4, 4));
