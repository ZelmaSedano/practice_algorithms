function mergeArrays(arr1, arr2) {
    // edgecase: if one of the arrays is empty
    if(arr1.length === 0 || arr2.length === 0) {
        return 'please add elements to both arrays'
    }
    result = arr1.concat(arr2);
    return result;
}

console.log(mergeArrays([1,2,3,4], []));
