let faces = [];
let colsSlider;
let cols;
let rowsSlider;
let rows;

function preload() {
  for (let i = 0; i < 18; i++) {
    faces[i] = loadImage("images/Face_" + i + ".png");
  }
}
function setup() {
  createCanvas(600, 600);
  background(145);
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
function generatePicture() {
  cols = colsSlider.value();
  rows = rowsSlider.value();
  //Resizing the Images
  for (let i = 0; i < 18; i++) {
    faces[i].resize(600, 600);
  }
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
