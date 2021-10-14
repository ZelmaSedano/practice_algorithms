// create a function that creates a staircase out of #'s with the number of steps specified by n
function staircase(n) {
  // loop from 1 to n, including n
  for(let i = 1; i <= n; i++) {
    // console log # and repeat it n times
    // add padStart(n) - this will push the #'s to the right
    console.log('#'.repeat(i).padStart(n));
  }
}

staircase(6);
