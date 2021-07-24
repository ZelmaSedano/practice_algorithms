// create a function that returns the smallest and largest number of a given array
function minMaxNum(arr) {
    // sort the array using the a,b comparison trick
    arr.sort(function(a,b) {
        return a-b;
    }) 

    console.log(arr[0], arr[arr.length-1]);
}

minMaxNum([33,333,3]);