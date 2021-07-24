// create a function that uses recursion to count down from num to 1
function countdown(num) {
    // stopping conditional
    if (num === 0) {
        return 0; 
    }

    console.log(num);       // print number b/f it goes on Call Stack
    countdown(num-1);
}

countdown(5);