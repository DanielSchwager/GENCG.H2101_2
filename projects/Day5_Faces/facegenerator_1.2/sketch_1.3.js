let faces = [];
let colsSlider;
let cols;
let rowsSlider;
let rows;
let imageCount = 19;

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

  colsSlider = createSlider(1, 70, 7, 1);
  colsSlider.position(15, height * 0.95);
  rowsSlider = createSlider(1, 70, 7, 1);
  rowsSlider.position(width - 140, height * 0.95);
  generatePicture();
  let button = createButton("Generate");
  button.mousePressed(generatePicture);
  button.position(width / 2, height * 0.93);
}

function draw() {
  colsSlider.changed(generatePicture);
  rowsSlider.changed(generatePicture);
}
//Function to generate an image from four pictures.
function generatePicture() {
  cols = colsSlider.value();
  rows = rowsSlider.value();
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
