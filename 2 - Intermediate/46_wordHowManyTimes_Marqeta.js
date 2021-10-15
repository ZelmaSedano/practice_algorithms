function wordHowManyTimes(string) {
      // create an empty object to push key/value pairs into
      let obj = {};
      
      // create an array of words 
      // pass a RegEx to remove all whitespace characters
      let arr = string.split(' ');
      
      // loop through the string
      for(let word of arr) {
          // if the character IS NOT in the object, then add it w/ a value of 1
          if(!obj[word]) {
              obj[word] = 1;
              // if it IS in the object, then add to its value BY 1
          } else {
              obj[word]++;
          }
      }
      
      // create an empty array to push the key/value pairs into
      let result = []; // only strings
      
      // loop through the object, and push the value & key into result
      for(let key in obj) {
          if(key !== '') {
              result.push(`${key}`);   
      }            
}
  
console.log(wordHowManyTimes("The quick brown fox jumped over the lazy brown dog's back"));
