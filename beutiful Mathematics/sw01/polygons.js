let ecken = 10;
let einheitskreis = 360;
let winkel = 360 / ecken;
let canvas;
let diameter = einheitskreis * 2;
let länge;
let abstand;

function setup() {
  canvas = createCanvas(720, 720);
  angleMode(DEGREES);
  //Länge der Seite mit Cosinussatz berechnen.
  länge = Math.sqrt(
    2 * Math.pow(einheitskreis, 2) -
      2 * einheitskreis * einheitskreis * cos(winkel)
  );
  //Abstand des Mittelpunktes der Seitenlänge zum Mittelpunkt berechnen
  //mit Hilfe des Sinussatzes
  abstand = (einheitskreis * sin(90 - winkel / 2)) / sin(90);
}

function draw() {
  background(150);
  translate(width / 2, height / 2);
  // ellipse(0, 0, diameter, diameter);

  for (i = 0; i < ecken; i++) {
    push();
    stroke(0);
    rotate(winkel * i);
    line(-länge / 2, abstand, länge / 2, abstand);
    // line(-20, -20, 20, -20);
    pop();
  }
  displayComment(width, height);
}
