let ecken = 4;
let länge = 400 / ecken;
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
    rotate(winkel);
    line(-länge, -länge, länge, -länge);
    pop();
  }

  // function draw() {
  //   translate(width / 2, height / 2);
  //   for (i = 0; i < ecken; i++) {
  //     push();
  //     newX = länge * i * 90;
  //     newY = länge * (i + 1) * 90;
  //     stroke(0);
  //     line(0, 0, newX, newY);
  //     translate(newX, newY);
  //     pop();
  //   }
}
// function draw() {
//   translate(width / 2, height / 2);
//   for (i = 0; i < ecken; i++) {
//     push();
//     rotate(winkel);
//     line(-20, 20, 20, 20);
//     pop();
//   }
// }
