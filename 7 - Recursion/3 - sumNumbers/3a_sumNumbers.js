// create a function that returns the running total 
function sum(arr) {
    // create conditional
    if(arr.length == 1) {
        return arr[0];
    } else {
        return arr[0] + sum(arr.slice(1));      //arr.slice(1) = 2
        /*  how it works
                        index       arr[0] + sum(arr.slice(1));
        1st Call        0&1         1 + sum(2) = 3 (.length == 3)
        2nd Call        2           3 + sum(3) = 6 (.length == 2)
        3rd Call        3           6 + sum(4) = 10 (.length == 1)
        /* loop breaks when 10 is pushed into the outer arr, and since the arr.length is 1, the loop terminates :) */
    }
}

console.log(sum([1,2,3,4]));