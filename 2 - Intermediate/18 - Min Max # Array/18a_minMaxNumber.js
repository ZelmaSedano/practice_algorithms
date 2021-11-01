// create a function that returns the smallest and largest numbers from a given array in that order (smallest, largest)
function minMax(arr) {
    // fail fast - check to see if arr is an array
    if(arr.isArray === false) {
        throw new Error('Please enter a valid array');
    }

    // sort the array and return first and last element
    let sorted = arr.sort((a,b) => a-b);

    return ([sorted[0], sorted[sorted.length-1]]);
}

console.log(minMax([1,2,3,4,5])) // [1,5]
console.log(minMax([23334454,5]));
console.log(minMax([1]));
