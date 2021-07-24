// create a function that confirms if the ending of a string is the same as the target 
function confirmEnding(str, target) {
    if (str.substr(-target.length) === target) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding('I wonder', 'wond er'));