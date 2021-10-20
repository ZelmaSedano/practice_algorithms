// find the longest substring without repeating characters
const lengthOfLongestSubstring = (str) => { 
    let res = 0;
    let tmp = [];
    // loop through string using FOR OF loop
    for (const char of str){
        const idx = tmp.indexOf(char);
        if (idx > -1) { tmp = tmp.slice(idx + 1) }
        tmp.push(char);    
        if (tmp.length > res) { res = tmp.length }
    }
    return res;
};

console.log(lengthOfLongestSubstring('abcabcabc'));
console.log(lengthOfLongestSubstring('cdeabc'));
