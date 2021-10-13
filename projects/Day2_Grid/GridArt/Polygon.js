class Polygon {
  constructor(ecken, einheitskreis) {
    this.ecken = ecken;
    this.einheitskreis = einheitskreis;
    this.winkel = 360 / ecken;
    this.diameter = einheitskreis * 2;
    this.länge;
    this.abstand;
  }
  create(x, y) {
    angleMode(DEGREES);
    //Länge der Seite mit Cosinussatz berechnen.
    this.länge = Math.sqrt(
      2 * Math.pow(this.einheitskreis, 2) -
        2 * this.einheitskreis * this.einheitskreis * cos(this.winkel)
    );
    //Abstand des Mittelpunktes der Seitenlänge zum Mittelpunkt berechnen
    //mit Hilfe des Sinussatzes
    push();
    this.abstand = (this.einheitskreis * sin(90 - this.winkel / 2)) / sin(90);
    translate(x, y);
    // ellipse(0, 0, diameter, diameter);

    for (let i = 0; i < this.ecken; i++) {
      push();
      stroke(0);
      rotate(this.winkel * i);
      line(-this.länge / 2, this.abstand, this.länge / 2, this.abstand);
      // line(-20, -20, 20, -20);
      pop();
    }
    pop();
  }
}
