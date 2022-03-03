// create a function that takes a path and returns the shortest possible path, aka, a simplified path
function simplifyPath(path) {
    // create an array that removes the slashes from the path
    let arrNoSlahes = path.split('/');
// 1) /home//foo --> arr = ['home', foo']
    // create a result pathNoSlashesArray to return
    let result = []

    // loop through the array using for of loop
    for(let i of arrNoSlahes){
        // if the current element is '..', remove it
        if(i === '..') {
            // remove it from result
            result.pop();
        // if the current element is NOT '.', and its length is longer than 0
        } else if(i !== '.' && i.length >0) {
            // push i to result
            result.push(i);
        }
    }
// 2) result = ['home', 'foo']

    // return slash at the beginning + result arr w/ slashes b/w each element
// 3) result = /home/foo
    return '/' + result.join('/');
}

console.log(simplifyPath('/..//home/'))
// /..//home/ --> /home
// remove .. & extra slashes, because /home is the SIMPLEST path
