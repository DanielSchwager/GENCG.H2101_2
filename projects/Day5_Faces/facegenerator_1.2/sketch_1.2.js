let faces = [];
let cols = 1;
let rows = 10;
let row = [];

function preload() {
  for (let i = 0; i < 17; i++) {
    faces[i] = loadImage("images/Face_" + i + ".png");
  }
}
function setup() {
  createCanvas(1200, 1200);
  background(145);
  for (let i = 0; i < rows; i++) {
    row[i] = random(faces).get(0, (i * height) / rows, width, height / rows);
    image(row[i], 0, (i * height) / rows);
  }
}

function draw() {}
