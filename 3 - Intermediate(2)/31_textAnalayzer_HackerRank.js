
/*
 * Develop a text analyzer that processes an input `String` (sentence,
 * paragraph, etc) and outputs a report which shows the number of times
 * each word appears in the `String`. The report is sorted by a primary
 * order of word length, and a secondary order based upon the natural
 * lexical ordering of the word.
 *
 * Input:
 *   The quick brown fox jumped over the lazy brown dog's back
 *
 * Output:
 *   1 The
 *   1 fox
 *   1 the
 *   1 back
 *   1 lazy
 *   1 over
 *   2 brown
 *   1 dog’s
 *   1 quick
 *   1 jumped
 */

class TextAnalyzer {
  analyze(string) {
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
      
      // sort result
      let sortedResult = result.sort((a,b) => a.length-b.length);
      
      let newResult = [];
      // console.log(sortedResult);
      // loop through the sorted array
      for(let word of sortedResult) {
          newResult.push(`${obj[word]} ${word}`);
      }
      
      console.log(newResult);
      return newResult;
  }
}

class Solution {
  main() {
      this.testSortFrequency();
  }

  testSortFrequency() {
      var analyzer = new TextAnalyzer();
      var output = analyzer.analyze("The  quick    brown fox jumped over the lazy brown dog's back");
      this.assertEquals(output[0], "1 The");
      this.assertEquals(output[1], "1 fox");
  }

  assertEquals(expected, actual) {
      if (expected != actual) {
          throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
      }
  }
}

new Solution().main();
