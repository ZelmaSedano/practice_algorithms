function firstNonRepeat(str) {
    // edgecase: if string is empty
    if(!str || str.length === 0) {
        return 'please add letters to string'
    }

    // create an empty object 
    let obj = {};

    // loop through string, if letter isn't in obj, add it; if it is, add to its value by 1
    for(let char of str) {
        if(!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }

    // loop through obj using for-in loop, return first element whose value is 1
    for(let value in obj) {
        if(obj[value] === 1) {
            return 'first non-repeating letter: ', value;
        }
    }

    // backup
    return 'no non-repeating letters';
}

console.log(firstNonRepeat('helloh'))
