let grössePunkt = 1;

function setup() {
  createCanvas(720, 400);
  background(150);
  angleMode(DEGREES);
}

function draw() {
  drawKreis(100, 470);
}

function drawKreis(radius, anzahlPunkte) {
  translate(width / 2, height / 2);
  for (let i = 0; i < anzahlPunkte; i++) {
    push();
    rotate((i * 360) / anzahlPunkte);
    noStroke();
    fill(255, 204, 0);
    ellipse(0, radius, grössePunkt, grössePunkt);
    pop();
  }
}
