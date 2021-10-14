// create a function called 'main' 
// it has a component called 'r' that represents the radius - read 'r' as readLine()
// it also has a component called 'PI' that holds Math.pi
// print the area of the circle (PI * r * r);
// print the perimeter of the circle (PI * 2 * r);
function main() {    
  let r = readLine();    
  const PI = Math.PI;    
  console.log(PI * r * r);    
  console.log(2 * PI * r);
}
// you can't test this in chrome, it has to be in HackerRank
main(2,3);
