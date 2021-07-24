// create a function that squares every digit in a given number
function squareDigits(num) {
    // split the number into an array of numbers (you can only split strings, so convert the string into a number)
    arr = num.toString().split('');

    // loop over the array, replacing the value for each digit with its squared self
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }

    return Number(arr.join(''));
}

console.log(squareDigits(2222));