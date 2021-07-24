// create a function that returns the missing number in an array
function findMissing(arr) {
    // loop through the array, checking to see if arr[i+1] === arr[i] + 1
    for(let i = 0; i < arr.length; i++) {
        if(arr[i+1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
}

console.log(findMissing([1,2,3,4,6]));