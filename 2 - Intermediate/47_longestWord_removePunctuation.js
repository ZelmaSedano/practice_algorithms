// create a function that finds the longest word in a string EXCLUDING punctuation
// that means, you should go ahead and remove all the punctuation so you don't get stuck with a ? or . in your longest string
function longestWord(str) {
    // create a variable to hold the longest string
    let longest = '';

    // remove all the punctuation using RegEx
    let arr = str.match(/[a-zA-Z]+/g);

    // loop through the array; if the current element's length is longer than longest's length, then save it as longest's value
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

console.log(longestWord('this is the longest?'));
console.log(longestWord('hello!'));
console.log(longestWord('howdy :)'));
console.log(longestWord('Which word in the string will be the longest?'));// ‘longest’
