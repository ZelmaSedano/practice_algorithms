// create a function to find the common divisors b/w two given nums
function commonDivisors(num1, num2) {
    // create two separate arrays to hold the divisors for each number
    arr1 = [];
    arr2 = [];

    // loop from 2 to num1 i times
    for(let i = 2; i <= num1; i++) {
        if(num1 % i === 0) {
            arr1.push(i);
        }
    }

    for(let i = 2; i <= num2; i++) {
        if(num2 % i === 0) {
            arr2.push(i);
        }
    }

    // create a variable to hold the common divisors
    result = [];

    // loop through the two arrays, checking to see what matches
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