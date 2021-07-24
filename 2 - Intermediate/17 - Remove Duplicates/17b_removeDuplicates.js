// create a function that removes duplicates from a given array
function removeDuplicates(arr) {
    // create a new array to hold the duplicates-free array
    result = [];

    // use a .forEach iterator to perform the same function on each element
    arr.forEach(function(element) {
        if(!result.includes(element)) {
            result.push(element);
        }
    })

    return result;
}

console.log(removeDuplicates([1,1,2,2,3,3,4]));