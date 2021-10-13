let matrix;
let cols;
let rows;
let resolution = 25;
function setup() {
  createCanvas(1200, 900);
  cols = width / resolution;
  rows = height / resolution;
  matrix = generiere2dArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      matrix[i][j] = floor(random(2));
    }
  }
}
function draw() {
  background(200);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (matrix[i][j] == 1) {
        stroke(0);
        fill('rgb(0,25,0)');
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }
  let nächsteRunde = generiere2dArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let zustand = matrix[i][j];
      let sum = 0;
      let nachbar = countNachbar(matrix, i, j);
      if (nachbar == 3 && zustand == 0) { // Nachbarn mehr als 3 leben, dann "leben"
        nächsteRunde[i][j] = 1;
      } else if ((nachbar > 3 || nachbar < 2) && zustand == 1) { // Wenn weniger als 2 Nachbarn oder mehr als 3 leben, dann "sterben"
        nächsteRunde[i][j] = 0;
      } else {                          // Sonst bleibt
        nächsteRunde[i][j] = zustand;
      }
    }
  }
  matrix = nächsteRunde;
}
function countNachbar(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += matrix[col][row];
    }
  }
  sum -= matrix[x][y];
  return sum;
}
function generiere2dArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
  displayComment(width, height);
}