// create a function that counts the number of words in a string
function wordCount(str) {
    // create a counter variable to hold the count
    counter = 0; 

    // split the string into an array of words, so we can count them
    arr = str.split(' ');

    // loop through the array, adding to the counter variable everytime a word is present
    for(let i = 0; i < arr.length; i++) {
        counter += 1;
    }

    return counter;
}

console.log(wordCount('this is a collection of words'));