function findMissingNum(arr) {
    // edgecase: if array is empty
    if(arr.length === 0) {
        return 'please add elements to array';
    }

    // loop through array
    for(let i = 0; i < arr.length; i++) {
        // if the next element is the array IS NOT the current element's value plus 1
        if(arr[i+1] !== arr[i]+1) {
            // then return the current element's value plus 1
            return arr[i]+1;
        }
    }
}

console.log(findMissingNum([1,2,4]))
