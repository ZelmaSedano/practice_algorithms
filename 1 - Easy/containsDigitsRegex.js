let str1 = 'I ate 123 ice cream flavors';
let regexSearch = /\d+/;
// d = digits, + means 1 or more - test
console.log(regexSearch.test(str1));

let str2 = 'I ate four ice cream flavors';
console.log(regexSearch.test(str2));
