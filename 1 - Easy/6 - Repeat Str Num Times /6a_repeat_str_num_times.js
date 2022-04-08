function repeatStr(str, num) {
    // edgecase: if str is empty
    if(str.trim().length===0) {
        return 'please add letters to string'
    }

    return str.repeat(num)
}

console.log(repeatStr('', 3))
