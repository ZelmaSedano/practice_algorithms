// deconstruct the properties of this object into variables, then print variables
const person = {
    name: 'Justine', 
    age: 31, 
    address: {
        city: 'Lillestrøm', 
        state: 'Akersus'
    }
}

// renaming 'name' property to 'firstName'
const {name: firstName, age} = person
// print out new prop
console.log(firstName);
console.log(age);

