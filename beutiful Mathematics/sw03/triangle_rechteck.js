function setup() {
  createCanvas(400, 400, WEBGL);
  createEasyCam();

  document.oncontextmenu = function () {
    return false;
  };

  document.onmousedown = function () {
    return false;
  };
}

function draw() {
  background(100);
  fill(170);
  beginShape(TRIANGLE_STRIP);
  vertex(30, 75);
  vertex(80, 20);
  vertex(100, 75);
}
