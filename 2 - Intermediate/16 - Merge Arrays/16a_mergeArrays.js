// create a function that takes two arrays and merges them together
function mergeArrays(arr1, arr2) {
    // create an empty array to hold the new merged one
    result = [];

    // loop through the two arrays simultaneously
    for(let i = 0; i < arr1.length || i < arr2.length; i++) {
        if(i < arr1.length) {  
            result.push(arr1[i]);
        } if(i < arr2.length) {
            result.push(arr2[i]);
        }
    }

    return result;
}

console.log(mergeArrays(['a', 'b', 'c'], [1,2,3]));