// create a function that creates a copy of an array using the spread operator, so you don't alter the original array
function copySpread(arr) {
    let newArr = [...arr];
    // add something to new array
    newArr.push(5);

    return newArr;
}

console.log(copySpread([1,2,3,4]));
