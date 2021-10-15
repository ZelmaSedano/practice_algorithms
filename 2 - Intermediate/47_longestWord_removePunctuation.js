// longest word in a string
// ignore punctuation and assume the string will not be empty
function longestWord(str) {
    // create an empty variable to return that holds the largest word
    let largest = '';

    // split the string into a collection of words
    let arr = str.match(/[a-zA-Z]+/g);


    // loop through the array of words; if the length of largest is less than the current word's length, set that word as largest's value

    // ignore punctuation - loop backwards and pop?
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr);

        if(largest.length < arr[i].length) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(longestWord('this is a sentence'));
console.log(longestWord('Which word in the string will be the longest?'));// ‘longest’
