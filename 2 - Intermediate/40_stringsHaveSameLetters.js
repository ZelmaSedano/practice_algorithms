// create a function that returns the common letters b/w two strings
const intersectingLetters = (str1, str2) => {
    let result = '';

    // loop through str1 and check to see if str2 includes str1 chars
    for(let i = 0; i < str1.length; i++) {
        if(str2.includes(str1[i])) {
            result += str1[i];
        }
    }

    return result;
}

console.log(intersectingLetters('hi', 'i'));
