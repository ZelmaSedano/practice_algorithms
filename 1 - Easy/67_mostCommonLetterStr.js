// find the most commonly used letter in a string
// remove whitespace, so spaces aren't accidentally included
function mostCommonLetter(str) {
    // remove whitespaces and join back into a string
    let arr = str.match(/[a-zA-Z]+/g);
    let newStr = arr.join('');

    // create an object to add key/value pairs to
    let obj = {};

    // loop through the newStr; if char isn't in obj, add w/ value of 1, if it is in obj add to its value by 1
    for(let char of newStr) {
        if(!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }

    // create a variable to hold the occurrence and then a variable to hold char
    let occurrence = 0;
    let mostCommon = '';

    for(let key in obj) {
        if(obj[key] > occurrence) {
            occurrence = obj[key];
            mostCommon = key;
        }
    }

    return 'most common letter is: ' + mostCommon;
}

console.log(mostCommonLetter('what is up yall'));
