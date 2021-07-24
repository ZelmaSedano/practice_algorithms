// create a function that counts down from a given num to 1
function countdown(num) {
    // create a Stopping Condition
    if(num === 0) {
        return 0;
    }

    // console the number that's being pushed into the Call Stack, then use recursion to decrement/loop
    console.log(num);
    // recurse/loop [backwards b/c -]
    countdown(num-1);
}

countdown(8);