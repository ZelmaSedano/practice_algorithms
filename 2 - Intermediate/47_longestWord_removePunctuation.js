// create a function that finds the longest word in a string while also ignoring punctuation
const longestWord = (str) => {
    // create a variable to hold the longest word
    let longest = '';

    //split the str into a collection of words - this is where you remove whitespace characters
    let arr = str.match(/[a-zA-Z]+/g);

    // loop through the arr; if current element is longer than longest, then replace longest's value with current element
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

console.log(longestWord('this is the longest words?'));
console.log(longestWord('this    is     a   big    sentence     '));
