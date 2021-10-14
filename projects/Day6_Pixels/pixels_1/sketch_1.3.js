let faces = [];
let colsSlider;
let cols;
let rowsSlider;
let rows;
let imageCount = 18;
let rSlider;
let gSlider;
let bSlider;

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
  let button = createButton("Generate");
  button.mousePressed(generatePicture);
  button.position(width / 2, height * 0.93);
  generatePicture();
  rSlider = createSlider(0, 255, 0, 1);
  gSlider = createSlider(0, 255, 0, 1);
  bSlider = createSlider(0, 255, 0, 1);
}

function draw() {
  colsSlider.changed(generatePicture);
  rowsSlider.changed(generatePicture);
  rSlider.changed(manipulatePixels);
  gSlider.changed(manipulatePixels);
  bSlider.changed(manipulatePixels);
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

// Nicolas helped me a bit with reading out the RGB values from the pixel array. Now they can be manipulated.
function manipulatePixels() {
  loadPixels();
  let rManipulated = pixels[indexR + 0].value;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let indexR = (x + y * width) * 4;

      let r = pixels[indexR + 0];
      let g = pixels[indexR + 1];
      let b = pixels[indexR + 2];
      let a = pixels[indexR + 3];

      pixels[indexR + 0] = rManipulated + rSlider.value;
      pixels[indexR + 1] = g + gSlider.value;
    }
  }

  updatePixels();
}
