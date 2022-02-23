function wordCount(str) {
    if(str.length == 0) {
        return 'please enter a valid string'
    }
    // removes all the empty spaces
    let arr = str.match(/[a-zA-Z]+/g);
    if(arr == null) {
        return 'please enter a valid string'
    }

    return arr.length;

}

console.log(wordCount(' hi'))
