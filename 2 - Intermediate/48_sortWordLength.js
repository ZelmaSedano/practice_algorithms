// create a function that sorts the letters of a given string
// remove whitespace
function sortLetters(str) {
    // remove the whitespace and join back into a string
    let arr = str.match(/[a-zA-Z]+/g);
    let newStr = arr.join('')

    return sorted = newStr.split('').sort().join('');
}

console.log(sortLetters('hi there'));
