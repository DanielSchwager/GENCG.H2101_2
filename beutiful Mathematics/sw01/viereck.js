let ecken = 4;
let länge = 200;
let winkel = 360 / ecken;

function setup() {
  createCanvas(720, 720);
  background(150);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  for (i = 0; i < ecken; i++) {
    push();
    stroke(0);
    rotate(winkel * i);
    line(-länge / 2, -länge / 2, länge / 2, -länge / 2);
    pop();
  }
}
