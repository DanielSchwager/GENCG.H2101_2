let points = [];
var mouseClicks = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(140);
}

function draw() {
  drawShapes();
}

function mouseClicked() {
  stroke(255);
  noFill();
  circle(mouseX, mouseY, 10);
  points[mouseClicks] = [mouseX, mouseY];
  mouseClicks++;
}

function drawShapes() {
  fill(0);
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let x = points[i][0];
    let y = points[i][1];
    curveVertex(x, y);
  }
  endShape(CLOSE);
}

// function ctVertecies() {
//   beginShape();
//   for (let a = 0; a < 360; a++) {
//     let x = 100 * sin(a) + 200;
//     let y = 100 * cos(a) + 200;
//     vertex(x, y);
//   }
//   endShape();
// }

function drawLines() {
  for (let i = 0; i < points.length - 1; i++) {
    linePoints(points[i], points[i + 1]);
  }
}

function linePoints(point1, point2) {
  line(point1[0], point1[1], point2[0], point2[1]);
}
