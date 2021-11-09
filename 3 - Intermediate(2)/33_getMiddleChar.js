// create a function that returns the middle character of a string
function getMiddle(str) {
    // create a variable to hold the middle value of the string length
    middleIndex = str.length/2;

    // check to see if the number of elements is even or odd (odd will return a number immediately, but an even number has two middle characters)
    if (str.length % 2 === 0) {
        // the .slice() method extracts a section of a string, without modifying the original string
        return str.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return str.charAt(middleIndex);
    }
}

console.log(getMiddle('now'));
