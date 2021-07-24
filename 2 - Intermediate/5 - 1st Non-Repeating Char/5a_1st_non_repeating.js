// create a function that finds the first instance of a non-repeating element in a given string
function firstNonrepeating(str) {
    // loop through the string checking each element (i) to see how many times it shows up in the string
    for (let i = 0; i < str.length; i++) {
        // create a counter variable to hold how many times it showed up
        counter = 0; 

        // loop through the string j times and compare i with j, if they match add 1 to the counter variable 'cuz that's an occurrence of the current element
        for(let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                counter += 1;
            }
        }

        // break the loop when you come upon a counter value that is 1
        if (counter === 1) {
            console.log(str[i]);
        } 
    }
}

(firstNonrepeating('abcdeabcd'));