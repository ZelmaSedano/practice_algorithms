var repeatedSubstringPattern = function(s) {
    for(let i=1; i <= s.length/2; i++)
        if(s.substr(0, i).repeat(s.length/i) === s) return true;
    
    return false;
};
