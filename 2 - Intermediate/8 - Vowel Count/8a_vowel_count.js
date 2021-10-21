// create a function that counts the number of times a vowel is in a string
function vowelCount(str) {
    // specify what vowels are
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // convert every letter to lowercase so they can match vowels
    str = str.toLowerCase();

    // create a counter variable
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(vowelCount('hi abc there'));
