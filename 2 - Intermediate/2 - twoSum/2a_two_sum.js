// create a function that finds the two numbers that add up to target
// this is known as "twosum"
function twoSum(arr, target) {
    // loop through the array once, then again, doing i+1
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return 'no match';
}

console.log(twoSum([1,2,3,4], 5));
