// create a function that counts from 1 to num, replacing numbers divisible by 3 with 'fizz', div by 5 w/ 'buzz', and div by 15 w/ 'fizzbuzz'
function fizzBuzz(num) {
    // loop from 1 to num, including num, console.logging appropriate words 
    for(let i = 1; i <= num; i++) {
        if(i % 15 === 0) {
            console.log('fizzbuzz');
        } else if(i % 3 === 0) {
            console.log('fizz');
        } else if(i % 5 === 0) { 
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);