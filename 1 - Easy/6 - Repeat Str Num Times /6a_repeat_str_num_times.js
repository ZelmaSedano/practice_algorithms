function repeatStr(str, num) {
    // edgecase: if str is empty
    if(str == '' || str == ' ') {
        return false
    }

    return str.repeat(num)
}

console.log(repeatStr('hi', 3))
