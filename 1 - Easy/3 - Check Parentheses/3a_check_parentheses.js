// create a function checks to see if a given string has an equal number of opening & closing parentheses
function checkP(str) {
    // create a counter variable to count how many times an opening & closing parentheses occurs
    counter = 0; 

    // loop through the string, checking to see if each element (i) is an opening or closing parentheses
    for(let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            counter += 1;
        } else if (str[i] === ')') {
            counter -= 1;
        }
    }

    if (counter === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkP('()'));