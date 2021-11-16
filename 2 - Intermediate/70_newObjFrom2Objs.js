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
let joinData = {
   users: ['A', 'B', 'C'],
    ages: [1, 2, 3],
     isComplete: true,
  }
  
let otherObj = {
     users: ['X', 'Y', 'Z'],
     ages: [44, 55, 66],
     isComplete: false,
  };

function joinObj(obj1, obj2) {
  let newObj = {};
  
  // loop through the object
  for(let key in obj1) {
    let value1 = obj1[key]; // the obj1 value for key
    let value2 = obj2[key]; // the obj2 value for key
    let newValue = undefined; // the key value for the newObj

    // if value1 is an array, newValue should be value1 and value2 concatenated
    // if value1 is not an array, newValue should be value2
    if(Array.isArray(value1)) {
      newValue = value1.concat(value2);
    } else {
      newValue = value2;
    }
    // set the new object's key with bracket notation & set its value to be newValue
    newObj[key] = newValue;


    // // if the current elemtn is an array
    // if(Array.isArray(key)) {
    //   // concatonate two arrays
    //   // key b/c there are multiple props that are arrays
    //   // if(!newObj(obj[key])) {
    //   //   newObj(obj[key]);
    //   // }
    // }
  }
   return newObj
}
console.log(joinObj(joinData, otherObj));
