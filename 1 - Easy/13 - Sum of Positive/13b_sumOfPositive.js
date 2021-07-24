// create a function that sums up only positive integers in an array
function sumPositiveNumbers(arr) {
    // create a variable to hold the result
    result = 0;             // 0 cuz you're summing
    
    // loop through the array, adding to the sum variable each time, but only if a number is positive
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            result += arr[i];
        }
    }

    return result;
}

console.log(sumPositiveNumbers([1,3,-1]));