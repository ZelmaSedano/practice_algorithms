function sortArrayBackwards(arr) {
    // edgecase: if array is empty
    if(arr.length === 0) {
        return 'please add elements to string';
    }

    // sort the array
    sortedArr = arr.sort((a,b) => b-a)
    return sortedArr
}

console.log(sortArrayBackwards([1,2,3,4]))
