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
let hX;
let hY;
let mX;
let mY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  diameter = min(width, height) * 0.9;
  radius = diameter / 2;
  hDiameter = diameter / 4.8989;
  hRadius = hDiameter / 2;
  mDiameter = hDiameter / 7.7459;
  mRadius = mDiameter / 2;
  sDiameter = mDiameter / 7.7459;
  sRadius = sDiameter / 2;
  opacity = 100;
  background(0);
}

function draw() {
  const now = new Date();
  const [seconds, minutes, hours] = [
    now.getSeconds(),
    now.getMinutes(),
    now.getHours(),
  ];
  // Outer Circle
  stroke(255);
  strokeWeight(2);
  noFill();

  // Hours
  if (hours > 12) {
    hAngle = map(hours, 0, 11, 0, 330);
  } else {
    hAngle = map(hours, 12, 23, 0, 330);
  }
  translate(width / 2, height / 2);
  hX = radius * cos(hAngle);
  hY = radius * sin(hAngle);
  line(0, 0, hX, hY);

  // Minutes
  mAngle = map(minutes, 0, 59, 0, 354);
  translate(hX, hY);
  mX = 300 * Math.sin(radians(mAngle));
  hY = 300 * Math.cos(radians(mAngle));
  line(0, 0, mX, mY);

  // Seconds
  // fill(255, 0, 0);
  sAngle = map(seconds, 0, 59, 0, 354);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(radians(hAngle - 90), radius - hRadius));
  translate(p5.Vector.fromAngle(radians(mAngle - 90), hRadius - mRadius));
  translate(p5.Vector.fromAngle(radians(sAngle - 90), mRadius - sRadius));
  circle(0, 0, sDiameter);
}
