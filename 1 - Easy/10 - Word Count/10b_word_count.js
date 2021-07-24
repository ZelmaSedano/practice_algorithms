// create a function to count the number of words in a given string
function wordCount(str) {
    // split the string into a collection of words
    arr = str.split(' ');

    // create a counter variable to hold the # of words
    counter = 0; 

    // loop through the array, adding to the counter variable for every word
    for(let i = 0; i < arr.length; i++) {
        counter += 1; 
    }

    return counter;
}

console.log(wordCount('ha no way'));