// create a function that given the string 'Code', returns 'CCoCodCode' [[1], [1,2], [1,2,3], [1,2,3,4]]
function stringsplosion(str) {
  // create an empty string variable
  let result = '';

  // loop from 1 to end of the string, including the end
  for (let i = 0; i <= str.length; i++) {
    // return a substring, which doesn't include ending, with each rotation/loop
    // every time you loop, i is going up one number, so each iteration returns a slighly longer string
    // C, Co, Cod, Code
    result += str.substring(0, i);
  }

  return result;
}

console.log(stringsplosion('Code'));

// stringsplosion('abc') → 'aababc'

// stringsplosion('ab') → 'aab'
