// Create a function that takes two integers and displays the largest one
function largestInt(num1, num2) {
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    return 'Please check your input and make sure they are numbers.';
  } else if (num1 === num2) {
    return 'Numbers are equal to each other.';
  } else {
    // if num1 is bigger than num2, return num1; else return num2
    return num1 > num2 ? num1 : num2;
  }
}

console.log(22, largestInt(11, 22));
console.log(44, largestInt(22, 44));
console.log(largestInt(22, 22));
console.log(largestInt('hello', 44));
