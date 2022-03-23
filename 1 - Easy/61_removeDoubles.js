// create a func that removes all the doubles from a string
function removeDoubles(str){
    let result= "";
    //write a loop, interate through string
    for (let i = 0; i < str.length; i++){
        // if the current element and the next element are the same, then add only one to the result array 
        if (str[i] === str[i+1]){
            result += str[i];
        }
        
        // once you get to the end of the array you no longer have an i+1 to check for equality
        // so simply add the last letter
        else if(i === str.length-1) {
            result += str[i];
        }
    }

    return result;
}

console.log("expected result: abdea," , removeDoubles("aabbddeea"))
