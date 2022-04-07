function confirmEnding(str, target) {
    // if string is empty
    if(!str || str.length === 0) {
        return 'please add letters to string'
    }

    return str.endsWith(target);
}

console.log(confirmEnding('hi', 'i'));
