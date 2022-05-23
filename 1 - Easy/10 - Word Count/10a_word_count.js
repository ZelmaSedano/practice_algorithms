function wordCount(str) {
    // edgecase: if string is empty or only spaces
    if(str.trim().length === 0) {
        return 'please add letters to string';
    }

    // split the string into words, then return the length of the array of words
    words = str.split(' ');
    return words.length;
}

console.log(wordCount('hi there'));
