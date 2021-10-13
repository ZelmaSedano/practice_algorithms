var arrangeCoins = function(num) {
  // if num is empty, return 0
  if(!num) return 0;
  // create two variables - one to return and one to track
  let result = 0;
  let total = 0;
  
  // while total is less or equal to than num
  while(total <= num) {
    // iterate result
    result++;
    // 
    total += result; 
  }
  if(result <= 1) return result; 
  return result - 1;
};

console.log(arrangeCoins(5));
