// create a function that sorts words by their length
function sortWordsLength(str) {
    // split the str into a list of words
    let arr = str.split(' ');

    // sort the words by length
    let sorted = arr.sort((a,b) => a.length-b.length);

    return sorted;
}

console.log(sortWordsLength('there are a lot of words here'));
