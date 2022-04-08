function palindrome(str) {
    // check length of str
    if(str.trim().length === 0) {
        return 'please add letters to string';
    }
    return str.split('').reverse().join('');
}

console.log(palindrome(''));
