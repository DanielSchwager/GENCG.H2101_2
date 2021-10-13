let faces = [];
let cols = 1;
let rows = 4;

function preload() {
  for (let i = 0; i < 17; i++) {
    faces[i] = loadImage("images/Face_" + i + ".png");
  }
}
function setup() {
  createCanvas(1200, 1200);
  background(145);
  //Top
  let top = random(faces).get(0, 0, width, height / 4);
  image(top, 0, 0);
  //Eyes
  let eyes = random(faces).get(0, height / 4, width, height / 4);
  image(eyes, 0, height / 4);
  //Nose
  let nose = random(faces).get(0, height / 2, width, height / 4);
  image(nose, 0, height / 2);
  //Chin
  let chin = random(faces).get(0, (height / 4) * 3, width, height / 4);
  image(chin, 0, (height / 4) * 3);
}

function draw() {}
