// create a function that returns the value of a property in an object using bracket notation

// object
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

function checkInventory(item) {
  // Only change code below this line
  return foods[item];
  // Only change code above this line
}

console.log(checkInventory("apples"));