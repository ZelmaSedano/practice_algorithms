function isUnique(s) {
    // make a set from the string, then compare the two
    let newSet = [...new Set(s)];
    // convert the set to a string
    let newStr = newSet.join('');
    // console.log(newStr);
    return newStr === s;
}

console.log(isUnique("dog")); // true
console.log(isUnique("book")); // false
console.log(isUnique("Spaces")) // true
console.log(isUnique("")) // false
