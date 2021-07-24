// create a function that returns the longest word in a given str
function longestWord(str) {
    // split the string into a collection of words, so their length can be analyzed
    arr = str.split(' ');

    // create a variable to hold the largest variable
    largest = '';

    // loop through the array, checking to see if the current word's length is longer than the longest variable
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > largest.length) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(longestWord('hilarious timing'));