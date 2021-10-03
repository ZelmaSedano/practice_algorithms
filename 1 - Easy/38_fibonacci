// create a function that returns the number from the location you provide in fibonacci's sequence
function fibonacci(num) {
  // set up the sequence
  let sequence = [1,1];

  // loop from 2 to num, not including num
  for(let i = 2; i < num; i++) {
    // reset the element in the sequence at current num's location
    sequence[i] = sequence[i-1] + sequence[i-2];
    // sequence[2] = sequence[2-1] + sequence[2-2]
    // sequence[2] = sequence[1] + sequence[0]
    // sequence[2] = 1 + 1; so sequence[2] = 2
    console.log('sequence loop: ', sequence[i]);
  }

  // since arrays are 0-indexed, this will return the number in the sequence at position num
    return `#${num} in fibonacci's sequence is: ${sequence[num-1]}`;
    // sequence[2-1], means return sequence[1], which is 1
}

console.log(fibonacci(3));
