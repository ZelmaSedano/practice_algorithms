// create a function that reverses a given string using recursion
function reverseString(str) {
    // stopping conditional
    if(str === '') {
        return '';
    }

    return reverseString(str.substr(1)) + str.charAt(0);
}