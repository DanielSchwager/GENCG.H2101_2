let diameter = 200;
let radius = diameter / 2;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(100);
}

function draw() {
  drawBackgroung();
  // noFill();
  stroke(0);
  translate(width / 2, height / 2);
  drawEggOfLife2();
}
function drawEggOfLife() {
  let length = 2 * radius * sin(120 / 2);
  rotate(60);
  for (let i = 0; i < 3; i++) {
    push();
    translate(length, 0);
    circle(0, 0, diameter);
    pop();
    rotate(120);
  }
  rotate(60);
  for (let i = 0; i < 3; i++) {
    push();
    translate(length, 0);
    circle(0, 0, diameter);
    pop();
    rotate(120);
  }
  circle(0, 0, diameter);
}

function drawEggOfLife2() {
  let length = 2 * radius * sin(120 / 2);
  for (let i = 0; i < 2; i++) {
    rotate(60);
    for (let i = 0; i < 3; i++) {
      push();
      translate(length, 0);
      circle(0, 0, diameter);
      pop();
      rotate(120);
    }
  }
  circle(0, 0, diameter);
}

//Code from https://happycoding.io/examples/p5js/for-loops/vertical-gradient
//to make the Background mor interesting
function drawBackgroung() {
  const m = 100;

  const topR = 255 * noise(frameCount / m);
  const topG = 255 * noise(1000 + frameCount / m);
  const topB = 255 * noise(2000 + frameCount / m);
  const bottomR = 255 * noise(3000 + frameCount / m);
  const bottomG = 255 * noise(4000 + frameCount / m);
  const bottomB = 255 * noise(5000 + frameCount / m);

  const topColor = color(topR, topG, topB);
  const bottomColor = color(bottomR, bottomG, bottomB);

  for (let y = 0; y < height; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);

    stroke(lineColor);
    line(0, y, width, y);
  }
}
