// create a function that repeats a given string a given num of times
function repeatString(str, num) {
    // create a variable to hold the repeated string
    result = ''; 

    // loop through the str, adding the string to the result variable every loop
    for(let i = 1; i <= num; i++) {
        result += str;
    }

    return result;
}

console.log(repeatString('ha', 3));