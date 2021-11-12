function getMiddleChar(str) {
  let middleIndex = str.length / 2;

  if (str.length % 2 === 0) {
    return str.slice(middleIndex - 1, middleIndex + 1); // 2 middle character
  } else {
    return str.charAt(middleIndex);
  }
}

console.log(getMiddleChar('hih'));
