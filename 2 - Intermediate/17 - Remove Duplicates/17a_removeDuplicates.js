// create a function that removes the duplicates from an array
function removeDuplicates(arr) {
    // wrapping everything in []'s returns the Set as an array
    return [...new Set(arr)]
}

console.log(removeDuplicates([1,2,3,3]))
