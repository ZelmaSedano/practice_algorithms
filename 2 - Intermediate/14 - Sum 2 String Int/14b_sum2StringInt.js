// create a function to to sum the integers from two STRINGS 
function sum2StringInt(str1, str2) {
    // create two sum variables to hold the two separate sums
    sum1 = 0; 
    sum2 = 0; 

    // using an .forEach iterator, perform a sum function on each element(e)
    str1.split('').forEach(function(e) {
        sum1 += +e;
    })

    str2.split('').forEach(function(e) {
        sum2 += +e;
    })

    return sum1+sum2;
}

console.log(sum2StringInt('123', '345'));