// create a function that checks to see if a given password has one capital, one lower-case, one digit, and one symbol in it
function checkPassword(str) {
    // create an array to store the missing letters/symbols/digits
    let result = [];

    // use conditionals to check
    if(str.search(/[A-Z]/) === -1) {
        result.push('UPPER');
    } 
    if(str.search(/[a-z]/) === -1) {
        result.push('LOWER');
    } 
    if(str.search(/[1-9]/) === -1) {
        result.push('DIGIT');
    }
    if(str.search(/[!@#_]/) === -1) {
        result.push('SYMBOL');
    }

    return result;
}

console.log(checkPassword('Ha1!'));
 // console.log( “Capital check:“, password.search(/[A-Z]/));
 // console.log( “Lowercase check:“, password.search(/[a-z]/));
 // console.log( “Number check:“, password.search(/[0-9]/));
 //  console.log( “Symbol check:“, password.search(/[!@#_]/))
