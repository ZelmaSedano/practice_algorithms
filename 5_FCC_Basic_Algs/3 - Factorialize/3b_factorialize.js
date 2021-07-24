// create a function that returns the factorial of a given number
function factorial(num) {
  // create a variable to hold the product
  let product = 1;

  // loop from 1 to num, including num
  for (let i = 1; i <= num; i++) {
    product = product * i;
  }

  return product;
}

console.log(factorial(4));
