let diameter;
let radius;
let opacity;
let hPosition = [];
let hAngle;
let mAngle;
let sAngle;
let hDiameter;
let hRadius;
let mDiameter;
let mRadius;
let sDiameter;
let sRadius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  diameter = min(width, height) * 0.8;
  radius = diameter / 2;
  hDiameter = diameter / 3;
  hRadius = hDiameter / 2;
  mDiameter = hDiameter / 3;
  mRadius = mDiameter / 2;
  sDiameter = mDiameter / 3;
  sRadius = sDiameter / 2;
  opacity = 100;
}

function draw() {
  background(200);

  const now = new Date();
  const [seconds, minutes, hours] = [
    now.getSeconds(),
    now.getMinutes(),
    now.getHours(),
  ];
  // Outer Circle
  stroke(0);
  noFill();
  circle(width / 2, height / 2, diameter);

  // Hours
  push();
  if (hours > 12) {
    hAngle = map(hours, 0, 11, 0, 330);
  } else {
    hAngle = map(hours, 12, 23, 0, 330);
  }
  fill(0, 0, 255);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(radians(hAngle - 90), radius - hRadius));
  circle(0, 0, hDiameter);
  pop();

  //https://p5js.org/reference/#/p5/translate
  // // rectMode(CENTER);
  // translate(width / 2, height / 2);
  // translate(p5.Vector.fromAngle(seconds, 400));
  // circle(0, 0, 20);

  // Minutes
  push();
  fill(0, 255, 0);
  mAngle = map(minutes, 0, 59, 0, 354);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(radians(mAngle - 90), radius - mRadius));
  circle(0, 0, mDiameter);
  pop();

  // Seconds
  push();
  fill(255, 0, 0);
  sAngle = map(seconds, 0, 59, 0, 354);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(radians(sAngle - 90), radius - sDiameter / 2));
  circle(0, 0, sDiameter);
  pop();
}
