function letterCapitalize(str) {
    // edgecase: if str is empty
    if(!str || str.length === 0) {
        return 'please add letters to the string'
    }

    // split the string into an array of words
    arr = str.split(' ');

    // loop through the array of words, targeting the first letter of each word
    for(let i = 0; i < arr.length; i++) {
        // reset the value of the current element to be capitalized and the rest of the word to be lower-case
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }

    return arr.join(' ');
}

console.log(letterCapitalize('no way jose'))
