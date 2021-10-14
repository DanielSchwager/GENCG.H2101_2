let faces = [];
let cols;
let rows;
let imageCount = 17;

function preload() {
  for (let i = 0; i < imageCount; i++) {
    faces[i] = loadImage("images/Face_" + i + ".png");
  }
}
function setup() {
  createCanvas(600, 600);
  background(145);
  //Resizing the Images
  for (let i = 0; i < imageCount; i++) {
    faces[i].resize(600, 600);
  }
  generatePicture();
}

function draw() {}
//Function to generate an image from four pictures.
function generatePicture() {
  cols = 300;
  rows = 300;
  //Creating the Colums and Rows for
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let pic = random(faces).get(
        (j * width) / cols,
        (i * height) / rows,
        width / cols,
        height / rows
      );
      image(pic, (j * width) / cols, (i * height) / rows);
    }
  }
}
