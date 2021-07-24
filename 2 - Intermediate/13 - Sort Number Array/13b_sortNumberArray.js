// create a function that sorts the numbers in a given array
function sortNums(arr) {
    // use the a,b trick
    arr.sort(function(a,b) {
        return a-b;
    })

    return arr;
}

console.log(sortNums([33,333,3333,2]));