function dashInsert(str) {
    // edgecase: if string is empty or spaces
    if(str.trim().length === 0) {
        return 'please add letters to string';
    }

    // split the string into an array of words
    let words = str.split('');

    // loop through the string and see if using a for loop
    // -1 after length to avoid looking for next element after last element
    for(let i = 0; i < words.length; i++) {
        if(words[i] % 2 ==1 && words[i+1] % 2 ==1) {
            words[i] == words[i] + '-';
        }
    }

    return words.join('');
}

console.log(dashInsert('373737'))
