// create a function that repeats a given string a given number of times 
function repeatString(str, num) {
    // stopping conditional
    if(num === 0) {
        return '';
    }

    return str + repeatString(str, num-1);
}

console.log(repeatString('ha', 3));