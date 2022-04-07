function repeatStr(str, num) {
    // edgecase: if str is empty
    if(!str || str.length === 0) {
        return false
    }

    return str.repeat(num)
}

console.log(repeatStr('hi', 3))
