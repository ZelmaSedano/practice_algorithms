// create a function that takes a string and returns an array WITHOUT COMMAS of the number of times the word appears in the string next to the word
function wordHowManyTimes(string) {
    // create an empty object to push key/value pairs into
    let obj = {};
    
    // create an array of words 
    // pass a RegEx to remove all whitespace characters
    let arr = string.split(' ');
    
    // loop through the string
    for(let word of arr) {
        // if the character IS NOT in the object, then add it w/ a value of 1
        if(!obj[word]) {
            obj[word] = 1;
            // if it IS in the object, then add to its value BY 1
        } else {
            obj[word]++;
        }
    }
    
    // create an empty array to push the key/value pairs into
    let result = []; // only strings
    
    // loop through the object, and push the value & key into result
    for(let key in obj) {
        // edge case to skip whitespace
        if(key !== '') {
            result.push(`${obj[key]} ${key}`);   
        }            
    }

    return result;
}

console.log(wordHowManyTimes("The quick brown fox jumped over the lazy brown dog's back"));
/* Output:
*   1 The
*   1 fox
*   1 the
*   1 back
*   1 lazy
*   1 over
*   2 brown
*   1 dog’s
*   1 quick
*   1 jumped
*/
