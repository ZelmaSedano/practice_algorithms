// create a function that finds the common divisors of two different numbers 
function commonDivisors(n1, n2) {
    // create two arrays to hold the divisors for each separate number
    arr1 = [];
    arr2 = [];

    // loop from 2 to each num i times, pushing the divisors into the appropriate array
    for(let i = 2; i <= n1; i++) {
        if(n1 % i === 0) {
            arr1.push(i);
        }
    }

    for(let i = 2; i <= n2; i++) {
        if(n2 % i === 0) {
            arr2.push(i);
        }
    }

    // create an empty array to hold the common divisors
    result = [];

    // loop through the two arrays looking for matches, and pushing the matching divisors into the result array
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }

    return result;
}

console.log(commonDivisors(30, 60));