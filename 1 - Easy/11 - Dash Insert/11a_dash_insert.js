function dashInsert(str) {
    // edgecase: if string is empty or just spaces
    if(str.trim().length === 0) {
        return 'please add letters to string';
    }

    // split the string into chars
    let arr = str.split('');

    // loop through the split array of chars
    for(let i = 0; i < arr.length; i++) {
        // if the current element is odd, then set the current element as 'arr[i] + '-''
        if(arr[i] % 2 == 1 && arr[i+1] % 2 == 1) {
            // reset the current element
            arr[i] = arr[i] + '-';
        }
    }

    return arr.join('');
}

console.log(dashInsert('3737373'))
