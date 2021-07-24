// create a function that finds the duplicates in a given array of numbers 
function findDuplicates(arr) {
    result = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j< arr.length; j++) {
            if(arr[i] === arr[j]) {
                result.push(arr[i]);
            }
        }
    }

    return result;
}

console.log(findDuplicates([1,2,3,1]));