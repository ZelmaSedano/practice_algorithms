// create a function that finds the duplicates between two separate arrays
function findDuplicates(arr) {
    result = [];

    // loop through arr1 i times, then arr2 j times (remembering to move one over, so you don't analyze the same element which will return a false-positive) 
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                result.push(arr[i]);
            }
        }
    }

    return result;
}

console.log(findDuplicates([1,2,3,4,5,1,2,3]));