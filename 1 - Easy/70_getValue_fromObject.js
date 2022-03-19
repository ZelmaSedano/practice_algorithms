// create a function that returns the value for whatever key you pass into it
function getValue(item) {
  return object[item]
}

let object = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
}

console.log(getValue('apples'))
