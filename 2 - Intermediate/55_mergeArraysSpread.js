function mergeArrays(arr1, arr2) {
    // edgecases: if array 1 or array 2 are empty
    if(arr1.length === 0) {
      return 'please add elements to first array';
    }
    if(arr2.length === 0) {
      return 'please add elements to 2nd array';
    }
  
    let result = [...arr1, ...arr2];
    return result
}

console.log(mergeArrays([1,2,3], [4,5,6]))
