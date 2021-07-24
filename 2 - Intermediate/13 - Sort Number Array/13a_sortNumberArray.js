// create a function that sorts the numbers from an array 
function sortNumbersArray(arr) {
    // the default of the .sort method on the array is to sort strings, not numbers, so we have to use a little trick shown below
    arr.sort(function(a,b) {
        return a - b;
    })

    return arr;
}

console.log(sortNumbersArray([22,2,33]));