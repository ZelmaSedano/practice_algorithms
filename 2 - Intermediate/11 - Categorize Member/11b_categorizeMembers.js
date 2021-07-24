// create a function that assigns a category to new members of a golf club based off their credentials: age(0), and handicap(1)
// if they are over 55 & have a handicap of 7+, assign 'Senior', otherwise assign 'Open'
function categorizeMembers(arr) {
    // create a new array to hold the memberships
    result = [];

    // use a .forEach iterator to perform the same function on each member
    arr.forEach(function(member) {
        if(member[0] >= 55 && member[1] >= 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    })

    return result;
}

console.log(categorizeMembers([[55,7], [33, 3], [55, 3]]));