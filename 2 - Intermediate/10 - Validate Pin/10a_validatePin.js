// create a function that validates that a pin number entered by the user is 4 or 6 digits long; anything else is not a valid pin
function validatePin(num) {
    // you can't check the length of a number, so convert the num into a string
    num = num.toString();

    if(num === 4 || num === 6) {
        console.log('Thanks!');
    } else {
        console.log('Invalid PIN! Please try again');
    }
}

validatePin(333);