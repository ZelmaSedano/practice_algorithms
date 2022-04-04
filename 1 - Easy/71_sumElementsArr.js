// sum the elements of an array using .reduce() method
function sumElementsArr(arr) {
    // edgecase: if arr is empty
    if(arr.length == 0) {
        return 'please add elements to array'
    }
    return arr.reduce((a,b) => a+b, 0)
    // 0 is the default value
}

console.log(sumElementsArr([1,2,3,4]))
