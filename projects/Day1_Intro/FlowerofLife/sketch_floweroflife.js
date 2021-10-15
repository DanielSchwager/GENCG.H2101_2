let diameter = 150;
let radius = diameter / 2;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  translate(width / 2, height / 2);
  circle(0, 0, diameter * 3);
  rotate(30);
  // drawOuterFlowers();
  drawFlower();
}
function drawSeed() {
  circle(0, 0, diameter);
  push();
  translate(radius, 0);
  rotate(300);
  for (let i = 0; i < 6; i++) {
    circle(0, 0, diameter);
    rotate(300);
    translate(radius, 0);
  }
  pop();
}

function drawFlower() {
  push();
  translate(radius, 0);
  rotate(300);
  for (let i = 0; i < 6; i++) {
    drawSeed();
    rotate(300);
    translate(radius, 0);
  }
  pop();
}

function drawOuterFlowers() {
  push();
  translate(radius, 0);
  drawSeed();
  pop();
  push();
  translate(-radius, 0);
  drawSeed();
  pop();
  push();
  translate(radius / 2, (Math.sqrt(3) / 2) * radius);
  drawSeed();
  pop();
  push();
  translate(-radius / 2, (Math.sqrt(3) / 2) * radius);
  drawSeed();
  pop();
  push();
  translate(radius / 2, -(Math.sqrt(3) / 2) * radius);
  drawSeed();
  pop();
  push();
  translate(-radius / 2, -(Math.sqrt(3) / 2) * radius);
  drawSeed();
  pop();
}
