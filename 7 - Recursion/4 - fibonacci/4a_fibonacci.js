function fibonacci(n) {
   // if n is 0 or 1, return n (Stopping Condition)
   if (n === 0 || n === 1) {
       return n;
   }
   
   // Recursive step
   return fibonacci(n-1) + fibonacci(n-2);

    /* n = 7 (index 6(8) + 5(5) = 13 (which is what 7's value is))
       n = 6 (index 5(5) + 4(3) = 8 (which is what 6's value is)) 
       etc.
    everytime the loop occurs, a new value gets places on top of the Call Stack; once the loop terminates (when the final value [1] is pushed into the outer function), it will return the first occurence of n (which is 13, since it's on top of the Call Stack)
    */
}

console.log(fibonacci(7));