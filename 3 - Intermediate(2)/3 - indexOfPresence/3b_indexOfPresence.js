// create a function that uses the indexOf Operator to check to see if an element is present in an array; if it is, then return true
function isPresent(arr, elem) {
  // if an element ISN'T present in something, it's index's value is -1
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  // if not true
  return false;
}
