// create a function that repeats a given string a number of times 
function repeatString(str, num) {
    // create a variable to hold the repeated string 
    repeated = '';

    // loop over and over num times
    for (let i = 1; i <= num; i++) {
        repeated = repeated + str;
    }

    return repeated;
}

console.log(repeatString('dumb', 3));