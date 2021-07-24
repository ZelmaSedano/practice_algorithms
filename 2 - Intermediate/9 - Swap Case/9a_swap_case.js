// create a function that swaps the case of each letter in a given string
function swapCase(str) {
    // split the string into an array of letters
    arr = str.split('');

    // loop through the string, swapping the case of each letter
        // when setting the value for something, use only 1 =
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase(); 
        } else if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        }
    }

    return arr.join('');
}

console.log(swapCase('No Way'));