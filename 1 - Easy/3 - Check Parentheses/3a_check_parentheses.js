function checkParantheses(str) {
    // edgecase: if string is empty or just spaces
    if(str.trim().length === 0) {
        return 'please add letters to string';
    }

    // create a count variable - add to it if '(' & subtract if ')'
    let count = 0;

    // loop through the string, if the current element is '(', add to count
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            count++;
        } else if(str[i] === ')') {
            count --;
        }
    }

    // if count is 0 then the parantheses match
    return count == 0;
}

console.log(checkParantheses('()('))
