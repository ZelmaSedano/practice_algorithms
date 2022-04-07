function removeSpaces(str) {
    // edgecase: if str is empty or a space
    if(!str || str.length === 0) {
        return 'please add letters to string'
    }

    return str.split(' ').join('')
}

console.log(removeSpaces('hi there'))
