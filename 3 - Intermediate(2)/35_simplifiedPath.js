function simplifyPath(path) {
    // create an array that removes the '/' from the path
    let arr = path.split('/');
    // console.log(arr) --> ['', 'home', '', 'foo', '']
    // create a result arr to return 
    let result = [];
    // loop through the array
    for (let i of arr) {
        // if the current element is '..'
        if (i === '..') {
            // remove it 
            result.pop();
        // if the current element IS NOT '.' AND its length is longer than 0
        } else if(i !== '.' && i.length > 0) {
            // add that element to result
            result.push(i);
        }
    }
    // before join, result = ['home', 'foo'] w/ no /'s
    // console.log(result)
    // after join, result = /home/foo (/'s added b/w each element)
    return '/' + result.join('/');
};

console.log(simplifyPath('/home//foo/'))
// /home/foo
