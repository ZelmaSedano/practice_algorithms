// create a function that inserts a dash b/w every consecutive pair of odd numbers in a given string
function dashInsert(str) {
    // split the string into an array, so the numbers are analyzable 
    arr = str.split('');

    // loop through the string, adding dashes b/w every pair of odd numbers (except for the last number) 
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
            arr[i] = arr[i] + '-';
        }
    }

    return arr.join('');
}

console.log(dashInsert('333'));