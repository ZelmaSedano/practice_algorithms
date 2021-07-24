// create a function that returns the letters in a given string in alphabetical order

function alphabetSoup(str) {
    return str.split('').sort().join('');
}

console.log(alphabetSoup('no way'));

// expected output: 'anowy'

// interestingly enough, the space b/w no & way was deleted