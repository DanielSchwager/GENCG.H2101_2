let points = [];
var mouseClicks = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  drawLinesIteration();
}

function mouseClicked() {
  stroke(255);
  noFill();
  circle(mouseX, mouseY, 5);
  points[mouseClicks] = [mouseX, mouseY];
  mouseClicks++;
}

function returnVertex() {
  for (let i = 0; i < points.length; i++) {
    return vertex(point[i][0], point[i][1]);
  }
}

function drawLinesIteration() {
  stroke("red");
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < i; j++) {
      linePoints(points[i], points[j]);
    }
  }
}

function drawLines() {
  for (let i = 0; i < points.length - 1; i++) {
    linePoints(points[i], points[i + 1]);
  }
}

function linePoints(point1, point2) {
  line(point1[0], point1[1], point2[0], point2[1]);
}
