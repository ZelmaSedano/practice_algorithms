const swapCase = str =>
    // split the string into an array of letters
    arr = str.split('')
    // call the map function
    // it targets each character ('c') 
    // if the current char is lowercase, then uppcase it; otherwise: make it lowercase (upper -> lower)
    .map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    // rejoin the array into a string
    .join('')


console.log(swapCase('Hello'))
