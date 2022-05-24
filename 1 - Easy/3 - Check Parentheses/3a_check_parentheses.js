function checkParentheses(str) {
    // edgecase: if string is empty or just spaces
    if(str.trim().length == 0) {
        return 'please add letters to string';
    }

    // create a counter variable
    let count = 0;

    // loop through the string
    // if the current element is '(', then add to count
    // if it's ')', then subtract
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            count++;
        } else if(str[i] === ')') {
            count--;
        }
    }

    // if count is zero, return true
    return count == 0;
}

console.log(checkParentheses(''))
