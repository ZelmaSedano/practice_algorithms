// create a function that checks to see which two numbers from a given array add up to a given num
function twoSum(arr, num) {
    // create an empty array to hold the combinations of numbers
    result = [];

    // loop through the array i times, then j times(i+1) to see if any of the numbers add up to num; if they do, push the pair into the result array
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === num) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

console.log(twoSum([2,3,4,5], 9));