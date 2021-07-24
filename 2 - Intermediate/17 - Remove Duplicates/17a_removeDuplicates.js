// create a function that removes duplicates from a given array
function removeDuplicates(arr) {
    // create a variable to hold the new array
    result = [];

    // using a .forEach iterator, perform a function on each element; if result doesn't include element, add element
    arr.forEach(function(element) {
        if(!result.includes(element)) {
            result.push(element);
        }
    })

    return result;
}

console.log(removeDuplicates([1,1,1,3]));