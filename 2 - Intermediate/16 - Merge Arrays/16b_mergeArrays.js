// create a function that merges two arrays together (by looping through the two arrays simultaneously)
function mergeArray(arr1, arr2) {
    // create a new array to push the arrays into
    result = [];

    // loop through the two arrays simultaneously
    for(let i = 0; i < arr1.length || i < arr2.length; i++) {
        if(i < arr1.length) {
            result.push(arr1[i]);
        } if (i < arr2.length) {
            result.push(arr2[i]);
        }
    }

    return result;
}

console.log(mergeArray([1,2,3], ['a', 'b', 'c']));