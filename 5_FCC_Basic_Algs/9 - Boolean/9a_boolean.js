// create a function that checks to see if an item is a boolean; if it is, return true, if not, return false
function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(true));
