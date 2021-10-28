// create a function that checks to see if str2 is a permutation of str1
function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    return str1.split("").sort().join() === str2.split("").sort().join();
}

console.log(isPermutation('book', 'oobk')); // true
console.log(isPermutation('tree', 'trees')); // false
console.log(isPermutation('plant', 'plant')); // true
