// create a function that returns an array w/ all the duplicates removed
function removeDuplicates(arr) {
    if(arr.length === 0) {
        return 'please add elements to array';
    }
    return [... new Set(arr)]
}

console.log(removeDuplicates([1,2,3,3]))
