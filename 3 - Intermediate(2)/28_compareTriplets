// Create a function called compareTriplets that compares the scores of two players
// each player had an array of scores, which are 3 long
// if arr1[0] > arr2[0] -> arr1 is winner

function compareTriplets(a,b) {
  let countA = 0;
  let countB = 0;

  // loop through a's length
  for(let i = 0; i < a.length; i++) {
    if(a[i] > b[i]) {
      countA++;
    } else if(b[i] > a[i]) {
      countB++;
    }
  }

  return [countA, countB];
}

console.log(compareTriplets([1,2,3], [1,3,2])); // tie
