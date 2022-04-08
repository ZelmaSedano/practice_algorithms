function repeatStr(str, num) {
    // edgecase: if str is empty
    if(!str.trim().length) {
        return 'please add letters to string'
    }

    return str.repeat(num)
}

console.log(repeatStr('hi', 3))
