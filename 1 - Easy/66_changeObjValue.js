// change the value of an object's property 
let Techtonica = {
    'studentName': 'Your Name',
    'favoriteLanguage': 'Your favorite language',
    'cohortNumber': 3
};

function changeValue(obj) {
    obj.cohortNumber = 4;
    return obj
}

console.log(changeValue(Techtonica));
