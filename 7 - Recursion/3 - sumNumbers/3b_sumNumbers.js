// create a functin that adds up the numbers of a given array using recursion
function sumNum(arr) {
    // stopping conditional
    if(arr.length === 1) {
        return arr[0];
    }

    return arr[0] + sumNum(arr.slice(1));
}