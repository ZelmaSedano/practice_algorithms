function wordCount(str) {
    // edgecase: if str is empty or just a space
    if(!str || str === ' ') {
        return 'please add letters to string'
    }
    // remove all the empty spaces
    let arr = str.match(/[a-zA-Z]+/g);

    // split the string into an array
    return arr.length;
}

console.log(wordCount('hi  there'))
