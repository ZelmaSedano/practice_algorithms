// create a function that takes an object and returns 
function arguments1(obj) {
    let str = '';
    
    // loop through the object, which is called obj
    for(let key in obj){
        str += (`${key}=${obj[key]}&`);
    }
    
    let result = '';
    
    for(let i = 0; i < str.length-1; i++) {
        result += str[i];
    }

    return result;
}

console.log(arguments1({ color: 'blue', breed: 'golden'})); 
  // "color=blue&breed=golden"
