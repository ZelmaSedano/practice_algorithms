// create a function that removes the spaces from a given string
function removeSpaces(str) {
    // create an empty string variable to hold the new string
    result = '';

    // loop through the string; if a letter isn't a space, push it into the result variable
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            result = result + str[i];
        }
    }

    return result;
}

console.log(removeSpaces('no spaces at all'));