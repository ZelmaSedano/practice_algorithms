/* Write a function, joinData, that will accept two objects 
 * of data and combine them into one new data object and 
 * return them. The newer object values should be
 * joined in the order of the objects passed if the value is 
 * an array. If the value is not an array, the last object
 * argument should overwrite the value.
 * 
 * examples:
 * joinData({
 *    users: ['A', 'B', 'C'],
 *    ages: [1, 2, 3],
 *    isComplete: true,
 * }, {
 *    users: ['X', 'Y', 'Z'],
 *    ages: [44, 55, 66],
 *    isComplete: false,
 *    areaCode: 415,
 * });
 * // returns {
 *    users: ['A', 'B', 'C', 'X', 'Y', 'Z'],
 *    ages: [1, 2, 3, 44, 55, 66],
 *    isComplete: false,
 *    areaCode: 415,
 * }
 */

// object 
let firstObj = {
  users: ['A', 'B', 'C'],
  ages: [1, 2, 3],
  isComplete: true,
}

let secondObj = {
  users: ['X', 'Y', 'Z'],
  ages: [44, 55, 66],
  isComplete: false,
  areaCode: 415
};

function joinData(obj1, obj2) {
  // create a new object
  let newObj = {};

  // loop through the object and create variables to hold the value of each key
  for(let key in obj1) {
    let value1 = obj1[key];
    let value2 = obj2[key];
    let newValue; // the key value for newObj

    // while inside the loop - if the current value is an array, concatonate that 
    if(Array.isArray(value1)) {
      // add the concatonated values to newValue
      newValue = value1.concat(value2);
    } else {  // if the value isn't an array
      newValue = value2;  // replaces original value
    }

    // set the new object's key as newValue (this will repeat with each loop)
    newObj[key] = newValue;
  }

  return newObj;
}

console.log(joinData(firstObj, secondObj));
