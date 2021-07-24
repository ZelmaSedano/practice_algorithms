// create a function that checks to see if a given string is a palindrome or not
function palindrome(str) {
    // create a variable to hold the reversed string
    result = ''; 

    // loop backwards through the string
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    if(result === str) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('mom'));