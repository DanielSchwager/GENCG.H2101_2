function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);
  stroke(255);
  noFill();

  beginShape();
  vertex(100, 200);
  vertex(200, 50);
  vertex(300, 200);
  endShape();
}
