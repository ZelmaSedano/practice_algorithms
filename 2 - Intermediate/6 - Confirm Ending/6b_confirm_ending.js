// create a function that checks to see if a given target is the same as the ending of a string
function checkEnding(str, target) {
    if(str.substr(-target.length) === target) {
        return true;
    } 
    return false;
}

console.log(checkEnding('haha', 'ah'));