function sortArrayLetters(arr) {
    // edgecase: if arr is empty
    if(arr.length === 0) {
        return 'please add elements to array';
    }

    // return the sorted array of letters
    return arr.sort();
}

console.log(sortArrayLetters(['c', 'a', 'z']));
