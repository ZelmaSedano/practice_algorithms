// create a function that swaps the first and last letters of a string
function letterSwap(str) {
    // remove all whitespace from the string, just in case
    let tempArr = str.match(/[a-zA-Z]+/g);

    let newStr = tempArr.join('');

    // split the newStr into an array of letters
    let arr = newStr.split('');

    // assign the first and last letters, then swap
    [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];

    return arr.join('');
}

console.log(letterSwap('firs    t'));
console.log(letterSwap('code')); // 'eodc'
console.log(letterSwap('a')); // 'a'
console.log(letterSwap('ab')); // 'ba'

