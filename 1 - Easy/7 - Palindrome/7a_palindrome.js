function palindrome(str) {
    // edgecase: if string is empty or spaces
    if(str.trim().length === 0) {
        return 'please add letters to string';
    }

    return str == str.split('').reverse().join('');
}

console.log(palindrome('mom'))
