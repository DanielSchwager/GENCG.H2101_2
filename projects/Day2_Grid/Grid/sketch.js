var cols = 10;
var rows = 9;
var depth = 3;
var gridX;
var gridY;

var colors = [];

//Quelle Codetrain
//https://www.youtube.com/watch?v=OTNpiLUSiB4
function make2Darray(cols, rows) {
  var arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function make3Darray(cols, rows, depth) {
  var arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      arr[i][j] = new Array(depth);
    }
  }
  return arr;
}

function make3DcolorArray() {
  colors = make3Darray(cols, rows, depth);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      for (let z = 0; z < depth; z++) {
        colors[i][j][z] = random(255);
      }
    }
  }
}

function setup() {
  createCanvas(600, 600);
  frameRate(3);
  gridX = width / cols;
  gridY = height / rows;
}

function draw() {
  background(220);
  make3DcolorArray();
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
