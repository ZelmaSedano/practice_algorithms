// create a function that counts the number of vowels in a given string
function vowelCount(str) {
    // identify what a vowel is by creating an array with vowels in it
    arr = ['a', 'e', 'i', 'o', 'u'];

    // lowercase all the elements in the string so they match the potential vowels
    str = str.toLowerCase();

    // create a counter variable to hold the number of vowels OUTSIDE the checking loop, because we want the loop to FINISH running so we have the entire results
    counter = 0;

    // loop through the string once, then the array of vowels, checking to see if any vowels are present; if there are, add to the counter variable
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (str[i] === arr[j]) {
                counter += 1;
            }
        }
    }

    // check and return the counter variable for the results
    return counter;
}

console.log(vowelCount('what is up my dudes'));