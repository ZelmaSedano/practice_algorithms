function factorialize(num) {
    // edgecase: if num is negative
    if(num < 0) {
        return 'please only use positive numbers';
    }

    // create a variable to hold product
    let result = 1;
    // loop from 1 to num
    for(let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorialize(5))
