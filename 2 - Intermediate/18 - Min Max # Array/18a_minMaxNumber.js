// create a function to return the min & max numbers from an array
function minMaxNum(arr) {
    // sort the array using the a,b trick
    arr.sort(function(a,b) {
        return a-b;
    })

    // you can't return b/c you're returning two values, and only the 2nd one will be displayed if you reutrn, so console.log
    console.log(arr[0], arr[arr.length-1]);
}

minMaxNum([33,33,3333,33333,3]);