// create a function that checks to see if every letter in a string is unique
function isUnique(str) {
    // make a new array with set & string
    let arr = [... new Set(str)];
    // convert the array back into a string
    return arr.join('') === str
}

console.log(isUnique('dog')); // no repeats
console.log(isUnique('look')); // 2 o's
