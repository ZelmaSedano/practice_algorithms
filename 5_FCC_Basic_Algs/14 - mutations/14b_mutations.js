function mutation(arr) {
  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();

  for (let i = 0; i < secondElement.length; i++) {
    let letter = secondElement[i];
    if (firstElement.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}

mutation(['hello', 'he']);
