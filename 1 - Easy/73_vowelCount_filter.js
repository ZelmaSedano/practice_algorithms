const countVowels = str => Array.from(str)
    .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('hello'))
