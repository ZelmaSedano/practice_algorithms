// create a function that counts the number of ways to take a given number of steps
function countSteps(num) {
    // stopping condition
    if(num === 1 || num === 2) {
        return num;
    }

    return countSteps(num-1) + countSteps(num-2);
}

console.log(countSteps(6));