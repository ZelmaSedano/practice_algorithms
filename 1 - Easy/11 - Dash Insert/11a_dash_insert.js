// create a function that puts a dash between two consecutive numbers in a string 
function dashInsert(str) {
    // split the string into an array 
    arr = str.split('');

    // loop through the string using a for loop, checking the value of arr[i] & arr[i+1] to see if they're both odd 
    for (let i = 0; i < arr.length-1; i++) {
        // use a conditional to check the value 
        if (arr[i] % 2 != 0 && arr[i+1] % 2 != 0) {
            arr[i] = arr[i] + '-';
        }
    }

    return arr.join('');
}

console.log(dashInsert('333555777'));