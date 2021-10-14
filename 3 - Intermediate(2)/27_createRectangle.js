// Create Rectangle
// create an object that has the length, width, perimeter, and area specified
function Rectangle(a, b) {
  return {
      length: a,
      width: b,
      perimeter: 2 * (a + b),
      area: a*b
  }
}

console.log(Rectangle(4,5));
