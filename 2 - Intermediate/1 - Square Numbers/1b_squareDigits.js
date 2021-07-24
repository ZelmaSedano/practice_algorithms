// create a function that squares every digit of a given number
function squareDigits(num) {
    // split the number into an array, remembering you can't split numbers
    arr = num.toString().split('');

    // loop through the array, squaring every digit
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }

    // return the number with squared digits (convert back to num)
    return Number(arr.join(''));
}

console.log(squareDigits(555));