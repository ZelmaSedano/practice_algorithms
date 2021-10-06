// create a function that sees if any of the numbers from a given array add up to a given num
function twoSum(arr, num) {
    // create an empty array to hold the collection of nested arrays that will contain two numbers from the array that add up to num
    result = [];

    // loop through the array i times, then j times so you can see if any numbers add up to num (make sure to use i+1 as the starter point on the 2nd loop)
    for(let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                result.push([arr[i], arr[j]]);
                // if you want to push index, just push i (0) or i+1 (1)
            }
        }
    }

    return result;
}

console.log(twoSum([2, 3, 4, 5], 8));
