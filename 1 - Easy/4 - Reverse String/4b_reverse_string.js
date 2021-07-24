// create a function that returns a given string in reverse
function reverseString(str) {
    // create a variable to hold the reversed string
    result = '';

    // loop backwards through the string, adding each element to the result variable
    for(let i = str.length-1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverseString('ha'));