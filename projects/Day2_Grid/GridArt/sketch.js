var cols = 10;
var rows = 10;
var depth = 3;
var gridX;
var gridY;
var diameter;

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
  gridX = width / cols;
  gridY = height / rows;
  make3DcolorArray();
  diameter = setDiameter;
  frameRate(1);
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
      // circle(x + gridX / 2, y + gridY / 2, gridX, gridY);
      // let polygon = new Polygon(3, gridY);
      let polygon = new Polygon(int(random(2, 11)), gridX / 2);
      polygon.create(x + gridX / 2, y + gridY / 2);
    }
  }
}

function setDiameter() {
  if (gridX > gridY) {
    return gridX;
  } else {
    return gridY;
  }
}
