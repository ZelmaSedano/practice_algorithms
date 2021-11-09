let Techtonica = {
  'studentName': 'Your Name',
  'favoriteLanguage': 'Your favorite language',
  'cohortNumber': 3
};

function removeValue(obj) {
  obj.cohortNumber = 4;
  return obj;
}

console.log(removeValue(Techtonica));
