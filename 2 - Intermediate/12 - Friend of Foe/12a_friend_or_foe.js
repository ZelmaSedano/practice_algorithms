// create a function that only returns names with 4 letters 
function friendOrFoe(arr) {
    result = [];

    // loop through the array of words and checks to see if the current word's length of 4 letters long or not
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length == 4) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(friendOrFoe(['mary', 'no']));