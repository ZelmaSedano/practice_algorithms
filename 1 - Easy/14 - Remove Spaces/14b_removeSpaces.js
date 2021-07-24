// create a function that removes the spaces in a given string
function removeSpaces(str) {
    // create a variable to hold the spaceless string
    result = ''; 

    // loop through the string, adding letters to result
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            result += str[i];
        }
    }

    return result;
}

console.log(removeSpaces('haha no'));