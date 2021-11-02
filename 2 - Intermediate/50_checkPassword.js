function checkPassword(password) {
  let arr= [];
  if (password.search(/[A-Z]/) === -1){
    arr.push(“UPPER”);
  }
  if (password.search(/[a-z]/) === -1){
    arr.push(“LOWER”);
  }
  if (password.search(/[0-9]/) === -1){
    arr.push(“NUM”);
  }
  if (password.search(/[!@#_]/) === -1){
    arr.push(“SYM”);
  }
  if (arr.length === 0){
    return true;
  }
  return arr;
  }
 // console.log( “Capital check:“, password.search(/[A-Z]/));
 // console.log( “Lowercase check:“, password.search(/[a-z]/));
 // console.log( “Number check:“, password.search(/[0-9]/));
 //  console.log( “Symbol check:“, password.search(/[!@#_]/))
