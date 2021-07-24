// create a function that checks to see if a given num is an integer or not (integer = whole number w/ no decimals)
function isNumInteger(num) {
    return (num % 1 === 0);
}

console.log(isNumInteger(2));