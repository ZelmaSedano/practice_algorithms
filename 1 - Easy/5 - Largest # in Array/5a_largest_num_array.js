// create a function that returns the largest number in a given array 
function largestNum(arr) {
    // create a variable to hold the largest number
    largest = 0; 

    // loop through the array, comparing the current integer (i) with the value of the largest variable
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(largestNum([1,2,3,5,11]));