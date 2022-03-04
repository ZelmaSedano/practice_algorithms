function findShortestSubArray(nums) {
    // create a map to hold values 
    let map = {};

    // loop through the array; if number not in map, add it
    for(let i of nums) {
        if (!map[i]) {
        map[i] = 1;
        } else {
        map[i] += 1;
        }
    }

    let occurrence = 0;
    let mostCommon = 0;
    // loop through map and find most common
    for(let key in map) {
        if(map[key] > occurrence) {
        occurrence = map[key];
        mostCommon = key;
        }
    }

    let res = nums.length;

    for(let k in map) {
        if(map[k] === mostCommon) {
            res = Math.min(res, nums.lastIndexOf(Number(k)) - nums.indexOf(Number(k)) + 1);
        }
    }
    return res;
}

console.log(findShortestSubArray([1,2,2,3,1,4,2]))
