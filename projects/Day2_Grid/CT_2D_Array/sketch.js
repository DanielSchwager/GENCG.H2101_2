var cols = 10;
var rows = 9;
var gridX;
var gridY;

var colors = [];

function make2Darray(cols, rows) {
  var arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(400, 400);
  gridX = width / cols;
  gridY = height / rows;

  // for (let i = 0; i < cols; i++) {
  //   colors[i] = [];
  //   for (let j = 0; j < rows; j++) {
  //     colors[i][j] = random(255);
  //   }
  // }
  colors = make2Darray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      colors[i][j] = random(255);
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      var x = i * gridX;
      var y = j * gridY;
      fill(colors[i][j]);
      stroke(0);
      rect(x, y, gridX, gridY);
    }
  }
}
