let myStr = 'I love the beach';
let regexSearch = /beach/;

let newStr = 'forest';
let myNewStr = myStr.replace(regexSearch, newStr);

console.log(myNewStr);
