function repeatString(str, num) {
    // edgecase: if string is empty or num is negative
    if(str.trim().length === 0) {
        return 'please add letters to string';
    }
    // if number is negative or not an integer
    if(num < 0 || num % 1 !== 0) {
        return 'please only use positive whole numbers';
    }

    return str.repeat(num)
}

console.log(repeatString('hi', 3))
