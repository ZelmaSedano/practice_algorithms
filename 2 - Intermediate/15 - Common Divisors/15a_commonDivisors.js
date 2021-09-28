// create a function that finds the common divisors of two numbers
function commonDivisors(num1, num2) {
  // create an empty array to push divisors into for each number
  let arr1 = [];
  let arr2 = [];

  // loop from 2 to num for each number, finding divisors and pushing into arrs
  for(let i = 2; i < num1; i++) {
    if(num1 % i === 0) {
      arr1.push(i);
    }
  }

  for(let i = 2; i < num2; i++) {
    if(num2 % i === 0) {
      arr2.push(i);
    }
  }

  // loop through the two arrays and find the matches
  let result = [];

  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }

  return result;
}

console.log(commonDivisors(15,30));
