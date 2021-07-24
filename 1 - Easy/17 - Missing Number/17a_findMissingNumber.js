// create a function that returns the missing number in a series of numbers from an array
function findMissingNum(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i+1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
}

console.log(findMissingNum([1,2,3,5]));