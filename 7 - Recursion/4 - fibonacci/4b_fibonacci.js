// create a function that returns the nth number of fibonacci's sequence
function fibonacci(num) {
    // stopping condition
    if(num === 0 || num === 1) {
        return num;
    }

    return fibonacci(num-1) + fibonacci(num-2);
}

console.log(fibonacci(4));