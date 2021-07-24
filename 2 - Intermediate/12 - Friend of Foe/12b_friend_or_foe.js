// create a function that only returns the names spelled with 4 letters from a given array of names; those are your real friends
function friendOrFoe(arr) {
    // create an empty array to hold the new array
    result = [];

    // loop through the array, only pushing names with 4 letters into the new array
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length === 4) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(friendOrFoe(['mary', 'rob', 'sage']));