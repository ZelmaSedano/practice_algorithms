// create a function that returns an array w/ all the duplicates removed
function removeDuplicates(arr) {
    return [... new Set(arr)]
}

console.log(removeDuplicates([1,2,3,3]))
