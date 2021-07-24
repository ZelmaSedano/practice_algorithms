// using a for loop, add the numbers from an ARRAY
function sumArrayInt(arr) {
    // create a variable to hold the sum
    sum = 0; 

    // loop through the array, adding each number to the sum variable
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArrayInt([1,2,3]));