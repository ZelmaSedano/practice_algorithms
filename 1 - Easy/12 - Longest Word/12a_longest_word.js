function longestWord(str) {
    // edgecase: if string is empty or just spaces
    if(str.trim().length === 0) {
        return 'please add strings to letters';
    }

    // create a variable to hold the longest word
    let longest = '';

    // split the string into an array of words
    let arr = str.split(' ');

    // loop through the array of words
    for(let i = 0; i < arr.length; i++) {
        // if the current word is longer than longest, then make it longest's value
        if(arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return `The longest word is in the string is: ${longest}`;
}

console.log(longestWord('hi there'))
