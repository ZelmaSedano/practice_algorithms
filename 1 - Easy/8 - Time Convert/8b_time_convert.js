// create a function that returns the hours & minutes equivalents of a given number (300 = 5:00, 305 = 5:05)
function timeConvert(num) {
    // create the hours & minutes variables
    hours = Math.floor(num/60);         // returns whole number
    minutes = num % 60;

    if(minutes < 10) {
        return hours + ":0" + minutes;
    } else {
        return hours + ":" + minutes;
    }
}

console.log(timeConvert(300));