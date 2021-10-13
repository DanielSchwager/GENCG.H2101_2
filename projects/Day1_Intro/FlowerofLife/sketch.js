let heightCircle;
let outerCircle;
let smalCircles;

function setup() {
  createCanvas(800, 400);

  heightCircle = 350;
  outerCircle = heightCircle + 20;
  smalCircles = heightCircle / 3;
}

function draw() {
  background(120);
  circle(width / 2, height / 2, outerCircle);
  circle(width / 2, height / 2, heightCircle);
  //Mittellinie
  push();
  for (let i = 0; i < 3; i++) {
    circle(width / 2, height / 2, smalCircles);
    translate(0, smalCircles / 2);
  }
  pop();
  push();
  for (let i = 0; i < 3; i++) {
    circle(width / 2, height / 2, smalCircles);
    translate(0, -smalCircles / 2);
  }
  pop();

  //1 Rechts
  push();
  for (let i = 0; i < 2; i++) {
    circle(
      width / 2 + smalCircles / 2,
      height / 2 + smalCircles / 2,
      smalCircles
    );
    translate(0, -smalCircles / 2);
  }
  pop();
  push();
  for (let i = 0; i < 2; i++) {
    width / 2 + smalCircles / 2, height / 2 + smalCircles / 2, smalCircles;
    translate(0, smalCircles / 2);
  }
  pop();
  //2. rechts
  // push();
  // for (let i = 0; i < 2; i++) {
  //   circle(width / 2 + (2 * smalCircles) / 2, height / 2, smalCircles);
  //   translate(0, -smalCircles / 2);
  // }
  // pop();
  // push();
  // for (let i = 0; i < 2; i++) {
  //   circle(width / 2 + (2 * smalCircles) / 2, height / 2, smalCircles);
  //   translate(0, smalCircles / 2);
  // }
  // pop();
  // arc(50, 55, 50, 50, 0, HALF_PI);
  // arc(50, 55, 60, 60, HALF_PI, PI);
  noFill();
}
