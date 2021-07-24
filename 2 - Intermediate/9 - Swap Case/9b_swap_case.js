// create a function that swaps the cases of each letter in a string
function swapCase(str) {
    // split the string into an array of letters to be analyzed
    arr = str.split('');

    // loop through the array, checking and changing each case
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        } else if(arr[i] === arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase();
        }
    }

    return arr.join('');
}

console.log(swapCase('NoWay'));