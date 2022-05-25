function swapCase(str) {
    // edgecase: if string is empty or just spaces
    if(str.trim().length === 0) {
        return 'please add letters to string';
    }
    // split the string into an array of letters
    arr = str.split('');

    // loop through the string
    for (let i = 0; i < arr.length; i++) {
        // if the current element is lowercased
        if (arr[i] === arr[i].toLowerCase()) {
            // then uppercase it
            arr[i] = arr[i].toUpperCase(); 
        // if the current element is uppercase
        } else if (arr[i] === arr[i].toUpperCase()) {
            // then lowercase it
            arr[i] = arr[i].toLowerCase();
        }
    }

    return arr.join('');
}

console.log(swapCase('No Way'));
