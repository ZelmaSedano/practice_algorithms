// create a function that returns the sum of only the positive numbers from a given array
function sumOfPositive(arr) {
    // create a variable to hold the sum
    result = 0; 

    // loop over the array, checking to see if the current number is above 0; if it is, add it to the result variable
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result = result + arr[i];
        }
    }

    return result;
}

console.log(sumOfPositive([-1,-1,-1,1,2]));