function minimus(arr) {
    // edgecase: if array is empty
    if(arr.length === 0) {
        return 'please add elements to array';
    }

    // sort the array
    let sortedArr = arr.sort((a,b) => a-b);
    return sortedArr[0];
}

console.log(minimus([33,3333,3]))
