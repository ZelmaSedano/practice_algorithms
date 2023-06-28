function repeatStr(str, num) {
    // edgecases: if str is empty or num is negative or 0
    if(str.trim().length === 0) {
        return 'please enter a valid string';
    }
    if(num <= 0) {
        return 'please enter a positive number';
    }

    return str.repeat(num);
}

console.log(repeatStr('hi', 3));
