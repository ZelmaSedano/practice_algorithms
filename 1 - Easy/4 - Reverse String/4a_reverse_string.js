//  create a function that returns a given string in reverse
function reverseString(str) {
    // create an empty string variable to hold the reversed string
    result = '';

    // loop backwards from the 3nd of the string, keeping binary counting in mind
    for(let i = str.length-1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverseString('viagra'));