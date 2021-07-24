// create a function that counts the number of vowels in a given string
function vowelCount(str) {
    // tell the computer what a vowel is
    vowels = ['a', 'e', 'i', 'o', 'u'];

    // lowercase all the letters in the str and split it into an array of letters
    arr = str.toLowerCase().split('');

    // create a counter variable to hold the # of vowels
    counter = 0; 

    // loop through the array i times, then the vowels j times
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if(arr[i] === vowels[j]) {
                counter += 1;
            }
        }
    }

    return counter;
}

console.log(vowelCount('haha'));