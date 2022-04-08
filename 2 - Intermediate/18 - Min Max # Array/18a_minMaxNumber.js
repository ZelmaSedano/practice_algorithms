function minMax(arr) {
    // edgecase: if array is empty
    if(arr.length === 0) {
        return 'please add elements to array';
    }

    // sort the array 
    let sorted = arr.sort((a,b) => a-b);
    // return the first and last element (min & max)
    return ([sorted[0], sorted[sorted.length-1]]);
}

console.log(minMax([1,2,3,4,5])) // [1,5]
