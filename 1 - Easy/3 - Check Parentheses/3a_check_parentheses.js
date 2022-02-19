function checkParentheses(str) {
    // create a counter variable 
    let counter = 0; 

    // loop through the string, checking to see if each element is ( or )
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            counter++;
        } else if(str[i] === ")") {
            counter--;
        }
    }

    return counter === 0;
}

console.log(checkParentheses('()()('));
