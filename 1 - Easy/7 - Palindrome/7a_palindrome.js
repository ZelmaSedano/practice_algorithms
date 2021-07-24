// create a function that checks to see if a given string is a palindrome
function palindrome(str) {
    // create a variable to hold the reversed string
    reversed = '';

    // loop backwards through the string, pushing each letter into the reversed variable
    for (let i = str.length-1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    // check to see if the reversed variable and the string are the same; if so return true, otherwise return false
    if (reversed === str) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('won'));