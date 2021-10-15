let diameter = 100;
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
  // circle(0, 0, diameter * 3);
  rotate(30);
  // drawOuterFlowers();
  // circle(0, 0, diameter);
  // drawFlower();
  // drawOuterFlowers();
  // draw4Flowers();
  // draw5Flowers();
  // draw6Flowers();
  // draw7Flowers();
  draw8Flowers();
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
  circle(0, 0, diameter);
  push();
  translate(radius, 0);
  circle(0, 0, diameter);
  pop();
  push();
  translate(-radius, 0);
  circle(0, 0, diameter);
  pop();
  push();
  translate(radius / 2, (Math.sqrt(3) / 2) * radius);
  circle(0, 0, diameter);
  pop();
  push();
  translate(-radius / 2, (Math.sqrt(3) / 2) * radius);
  circle(0, 0, diameter);
  pop();
  push();
  translate(radius / 2, -(Math.sqrt(3) / 2) * radius);
  circle(0, 0, diameter);
  pop();
  push();
  translate(-radius / 2, -(Math.sqrt(3) / 2) * radius);
  circle(0, 0, diameter);
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
function draw3Flowers() {
  push();
  translate(radius, 0);
  drawOuterFlowers();
  pop();
  push();
  translate(-radius, 0);
  drawOuterFlowers();
  pop();
  push();
  translate(radius / 2, (Math.sqrt(3) / 2) * radius);
  drawOuterFlowers();
  pop();
  push();
  translate(-radius / 2, (Math.sqrt(3) / 2) * radius);
  drawOuterFlowers();
  pop();
  push();
  translate(radius / 2, -(Math.sqrt(3) / 2) * radius);
  drawOuterFlowers();
  pop();
  push();
  translate(-radius / 2, -(Math.sqrt(3) / 2) * radius);
  drawOuterFlowers();
  pop();
}
function draw4Flowers() {
  push();
  translate(radius, 0);
  draw3Flowers();
  pop();
  push();
  translate(-radius, 0);
  draw3Flowers();
  pop();
  push();
  translate(radius / 2, (Math.sqrt(3) / 2) * radius);
  draw3Flowers();
  pop();
  push();
  translate(-radius / 2, (Math.sqrt(3) / 2) * radius);
  draw3Flowers();
  pop();
  push();
  translate(radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw3Flowers();
  pop();
  push();
  translate(-radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw3Flowers();
  pop();
}

function draw5Flowers() {
  push();
  translate(radius, 0);
  draw4Flowers();
  pop();
  push();
  translate(-radius, 0);
  draw4Flowers();
  pop();
  push();
  translate(radius / 2, (Math.sqrt(3) / 2) * radius);
  draw4Flowers();
  pop();
  push();
  translate(-radius / 2, (Math.sqrt(3) / 2) * radius);
  draw4Flowers();
  pop();
  push();
  translate(radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw4Flowers();
  pop();
  push();
  translate(-radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw4Flowers();
  pop();
}
function draw6Flowers() {
  push();
  translate(radius, 0);
  draw5Flowers();
  pop();
  push();
  translate(-radius, 0);
  draw5Flowers();
  pop();
  push();
  translate(radius / 2, (Math.sqrt(3) / 2) * radius);
  draw5Flowers();
  pop();
  push();
  translate(-radius / 2, (Math.sqrt(3) / 2) * radius);
  draw5Flowers();
  pop();
  push();
  translate(radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw5Flowers();
  pop();
  push();
  translate(-radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw5Flowers();
  pop();
}
function draw7Flowers() {
  push();
  translate(radius, 0);
  draw6Flowers();
  pop();
  push();
  translate(-radius, 0);
  draw6Flowers();
  pop();
  push();
  translate(radius / 2, (Math.sqrt(3) / 2) * radius);
  draw6Flowers();
  pop();
  push();
  translate(-radius / 2, (Math.sqrt(3) / 2) * radius);
  draw6Flowers();
  pop();
  push();
  translate(radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw6Flowers();
  pop();
  push();
  translate(-radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw6Flowers();
  pop();
}
function draw8Flowers() {
  push();
  translate(radius, 0);
  draw7Flowers();
  pop();
  push();
  translate(-radius, 0);
  draw7Flowers();
  pop();
  push();
  translate(radius / 2, (Math.sqrt(3) / 2) * radius);
  draw7Flowers();
  pop();
  push();
  translate(-radius / 2, (Math.sqrt(3) / 2) * radius);
  draw7Flowers();
  pop();
  push();
  translate(radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw7Flowers();
  pop();
  push();
  translate(-radius / 2, -(Math.sqrt(3) / 2) * radius);
  draw7Flowers();
  pop();
}
