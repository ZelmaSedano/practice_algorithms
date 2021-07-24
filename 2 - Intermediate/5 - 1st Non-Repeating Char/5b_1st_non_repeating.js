// create a function that finds the first non-repeating character in a given string
function firstNonRepeating(str) {
    // check how many times each element is present in the string
    for(let i = 0; i < str.length; i++) {
        // create a counter variable to check how many times this letter is in the string
        counter = 0; 

        // loop through the string again, adding to the counter variable everytime you stumble upon the same character
        for(let j = 0; j < str.length; j++) {
            if(str[i] === str[j]) {
                counter += 1;
            }
        }

        // inside the current loop that checks this element, return it if it has only one occurrence and doesn't repeat
        if(counter === 1) {
            return str[i];
        }
    }
}

console.log(firstNonRepeating('abcdab'));