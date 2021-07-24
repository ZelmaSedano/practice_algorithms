// create a function that capitalizes the first letter of each word in a given string
function letterCapitalize(str) {
    // split the string into a collection of words
    arr = str.split(' ');

    // loop through the array of words, targeting the first letter of each word
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    return arr.join(' ');
}

console.log(letterCapitalize('no way'));