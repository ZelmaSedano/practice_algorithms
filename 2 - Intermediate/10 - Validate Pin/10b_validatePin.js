// create a function that checks to see if a given pin # is either 4 or 6 digits long; if not, return error message
function validatePin(num) {
    // you can only check the length of a string
    num = num.toString();
    
    if(num.length === 4 || num.length === 6) {
        return true;
    } else {
        return 'Error, please try again!';
    }
}

console.log(validatePin(1234));