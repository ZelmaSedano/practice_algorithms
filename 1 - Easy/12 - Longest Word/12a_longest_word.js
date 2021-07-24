// create a function that finds the longest word in a given string
function longestWord(str) {
    // create a variable to hold the longest word
    longest = '';

    // split the string into an array of words
    arr = str.split(' ');

    // loop through the array of words, comparing the length of each word with the length of the longest variable
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

console.log(longestWord('wow this is a big sentence'));