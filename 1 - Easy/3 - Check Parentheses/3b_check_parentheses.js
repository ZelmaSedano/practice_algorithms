// create a function that checks to see if a given string has an equal amount of... opening and closing parentheses ()
function checkP(str) {
    // create a counter variable to hold the count of opening and closing parentheses
    counter = 0; 

    // loop through the string, adding to the counter variable 
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            counter += 1; 
        } else if(str[i] === ')') {
            counter -= 1;
        }
    }

    if(counter === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkP('()()()'));