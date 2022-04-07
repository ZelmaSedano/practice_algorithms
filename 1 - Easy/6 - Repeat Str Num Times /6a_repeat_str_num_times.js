function repeatStr(str, num) {
    // edgecase: if str is empty
    if(!str || str == ' ') {
        return 'please add letters to string'
    }

    return str.repeat(num)
}

console.log(repeatStr(' ', 3))
