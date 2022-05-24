function fizzbuzz(num) {
    // edgecase: if num is negative
    if(num < 0) {
        return 'please only use positive numbers';
    }

    // loop from 1 to num
    for(let i = 1; i <= num; i++) {
        if(i % 15 == 0) {
            console.log('fizzbuzz');
        } else if(i % 3 == 0) {
            console.log('fizz');
        } else if(i % 5 == 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(15)
