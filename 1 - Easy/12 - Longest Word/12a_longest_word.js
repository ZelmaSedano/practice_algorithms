function longestWord(str) {
    // edgecase: if string is empty or just spaces
    if(str.trim().length === 0) {
        return 'please add letters to the string';
    }

    // create a variable to hold longest word
    let longest = '';

    // split the string into an array of words
    let words = str.split(' ');

    // loop through the array of words & if the current word is longer than longest, set longest's value to be current word
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > longest.length) {
            longest = words[i]
        }
    }

    return longest
}

console.log(longestWord('hi there'))
