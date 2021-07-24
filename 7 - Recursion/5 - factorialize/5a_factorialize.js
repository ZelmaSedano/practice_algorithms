// create a function that returns the factorial of a given num using recursion to calculate it
function factorialize(num) {
    // set up the Stopping Condition (if num === 0, return 1) 
    if(num === 0) {
        return 1; 
      // else, loop down from num 1 step at a time to 0, which will terminate the loop
    } else {
        return(num * factorialize(num-1));
        /* how it works: 
                        num         str + repeatString(str,num)
        1st Call:        5          5 * factorialize(5-1) // factorialize(4) = 20 
        2nd Call:        4          4 * factorialize(4-1) // factorialize(3) = (20 x 3) = 60                
        3rd Call:        3          3 * factorialize(3-1) // factorialize(2) = (60 x 2) = 120
        4th Call:        2          2 * factorialize(2-1) // factorialize(1) = (120 x 1) = 120
        5th Call:        1          5 * factorialize(1-1) // factorialize(0) =  (120 x 1 [factorial of 0 is 1]) = 120
        */

    }
}

console.log(factorialize(5));