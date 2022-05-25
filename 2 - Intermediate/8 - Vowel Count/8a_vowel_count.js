function vowelCount(str) {
    // edgecase: if str is empty or just spaces
    if(str.trim().length == 0) {
        return 'please add letters to string';
    }

    // specify what a vowel is
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // lowercase all the letters so they match arrays
    str = str.toLowerCase();

    // create a counter variable
    let count = 0;

    // loop through the string
    for(let i = 0; i < str.length; i++) {
        // if the current element is included in vowels
        if(vowels.includes(str[i])) {
            count++;
        }
    }

    return `The string has ${count} vowels`
}

console.log(vowelCount('hi there'))
