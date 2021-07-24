var line, triangle;
line = triangle = '';

for (var row = 1; row <= 7; row++) {
  line = '';
  for (var x = 0; x < row; x++) {
    line += '*';
  }
  triangle += line + '\n';
}

console.log(triangle);
