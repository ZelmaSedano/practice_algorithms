// create a function that returns the letters of a given string in alphabetical order
function alphabetSoup(str) {
    return str.split('').sort().join('');
}

console.log(alphabetSoup('no way'));