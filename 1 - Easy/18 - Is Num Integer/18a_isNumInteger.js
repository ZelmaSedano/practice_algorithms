// create a function that checks to see if a given num is an integer (whole number w/out decimals)
function isNumInteger(num) {
    if(num % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumInteger(3.3));