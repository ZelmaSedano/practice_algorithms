// create a function that sees how many different ways/patterns you can use to walk to the Nth step
// 1 = 1; 2 = 2; 3 = 3 (n-1 + n-2); 4 = 5 (n-1 + n-2)
function countSteps(n) {
    // stopping conditional
    if(num === 1 || num === 2) {
        return num;
    }

    return countSteps(n-1) + countSteps(n-2);
}

console.log(countSteps(4));
// (5-1 = 4) + (5-2 = 3)