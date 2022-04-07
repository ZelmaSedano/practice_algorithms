function reverseStr(str) {
    // edgecase: if string is empty
    if(!str || str.length === 0) {
        return 'please add letters to string'
    }

    return str.split('').reverse().join('');
}

console.log(reverseStr('hi'));
