// create a function that takes a given number (num) and converts it into hours & minutes 
function timeConvert(num) {
    // create a variable to hold the # of hours, using the Math.floor method to return a whole number instead of a fraction 
    hours = Math.floor(num/60);

    // create a variable to hold the minutes using the Remainder method
    minutes = num%60; 

    // if minutes is less than 10, add a 0 in front of it 
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return hours + ':' + minutes;
}

console.log(timeConvert(600));