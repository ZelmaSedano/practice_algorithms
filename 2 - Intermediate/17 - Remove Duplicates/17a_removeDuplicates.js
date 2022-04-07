// create a function that finds the common divisors b/w two numbers
function commonDivisors(num1, num2) {
    // result array
    result = []

    // loop from 2 to num2
    for(let i = 2; i < num2; i++) {
        if(num1 % i == 0 && num2 % i == 0) {
            result.push(i)
        }
    }

    return [...new Set(result)]
}

console.log(commonDivisors(15,30))
