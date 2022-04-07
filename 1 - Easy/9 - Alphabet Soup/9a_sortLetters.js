function sortLetters(str) {
    // edgecase: if str is empty
    if(!str || str.length === 0) {
        return 'please add letters to string'
    }

    return str.split('').sort().join('');
}

console.log(sortLetters('hi there'))
