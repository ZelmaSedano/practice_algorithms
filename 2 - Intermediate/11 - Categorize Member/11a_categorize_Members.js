// create a function that categorizes new members of a golf club
function categorizeMembers(arr) {
    // create an empty array to hold the correct assigned memberships
    result = [];

    // repeat a .forEach function on each element ('member') of the array 
    arr.forEach(function(member){
        if(member[0] >= 55 && member[1] >= 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    })

    return result;
}

console.log(categorizeMembers([[55, 8], [33, 3], [35, 8], [66, 8]]));