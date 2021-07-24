// create a function that returns the largest number in a given array 
function largestNum(arr) {
    // create an empty variable to hold the largest number
    largest = 0; 

    // loop through the array, checking for the largest number
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(largestNum([333333,8888888888,22222]));