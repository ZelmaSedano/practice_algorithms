// create a function that repeats a given string a given number of times, recursively
function repeatString(str, num) {
    // create a Stopping Condition that will terminate the recursive loop 
    // once num reaches 0, it will terminate the loop
    if(num === 0) {
        // returning '' prints a blank space instead of 'undefined'
        return '';
    }

    // use recursion to loop down from num to 0; once you reach 0 the recursive loop will terminate 
    else {
        return str + repeatString(str, num - 1);
    }
    /* how it works: 
                        num         str + repeatString(str,num)
        1st Call:        3         'abc' + ('abc', 3-1 = 2)
        2nd Call:        2         'abc' + ('abc', 2-1 = 1)                       
        3rd Call:        1         'abc' + ('abc', 1-1= 0)
        4th Call:        0         ''
    */
}

console.log(repeatString('no',3));