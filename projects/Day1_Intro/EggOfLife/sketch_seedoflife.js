let diameter = 130;
let radius = diameter / 2;

function setup() {
  createCanvas(600, 300);
  angleMode(DEGREES);
  background(0);
  noFill();
  stroke(255);
  translate(width / 4, height / 2);
  drawSeed();
  translate((width * 2) / 4, 0);
  circle(0, 0, diameter * 2);
  drawSeed4();
}

function draw() {}

function drawSeed() {
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
function drawSeed2() {
  circle(0, 0, diameter);
  translate(radius, 0);
  circle(0, 0, diameter);
  rotate(240);
  translate(radius, 0);
  circle(0, 0, diameter);
  for (let i = 0; i < 4; i++) {
    rotate(300);
    translate(radius, 0);
    circle(0, 0, diameter);
  }
}

function drawSeed3() {
  circle(0, 0, diameter);
  for (let i = 0; i < 2; i++) {
    rotate(240);
    translate(radius, 0);
    circle(0, 0, diameter);
  }
  for (let i = 0; i < 4; i++) {
    rotate(300);
    translate(radius, 0);
    circle(0, 0, diameter);
  }
}

function drawSeed4() {
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
