let steps;
let cPointsI;

let pointsArray1;
let pointsArray2;
let pointsArray3;
let pointsArray4;

let fractalPoints1;
let fractalPoints2;
let fractalPoints3;
let fractalPoints4;

function setup() {
  //initialisierung
  createCanvas(512, 512);
  steps = 16;
  cPointsI = 0.1;
  pointsArray1 = [];
  pointsArray2 = [];
  pointsArray3 = [];
  pointsArray4 = [];

  fractalPoints1 = [];
  fractalPoints2 = [];
  fractalPoints3 = [];
  fractalPoints4 = [];

  //funktion
  randomSeed(47);
  makePointArrays();
  makeFractalPointArrays();
  console.log("Hello World");
}

function draw() {
  background(220);
  drawFractalPoinsAverage(
    fractalPoints1,
    fractalPoints2,
    fractalPoints3,
    fractalPoints4
  );
}

function makePointArrays() {
  createStepPoints(steps, pointsArray1, 1);
  createStepPoints(2 * steps, pointsArray2, 2);
  createStepPoints(4 * steps, pointsArray3, 4);
  createStepPoints(8 * steps, pointsArray4, 8);
}

function createStepPoints(currentSteps, currentPointArray, amplitude) {
  let firstPoint = { x: 0, y: width / 2 };
  currentPointArray.push(firstPoint);
  for (i = 1; i <= currentSteps; i++) {
    let x = i * (width / currentSteps);
    // let y = random(0, height + 1);
    let y = width / 2 + random(-height / 2, height / 2) / amplitude;
    let point = { x, y };
    currentPointArray.push(point);
  }
}

function makeFractalPointArrays() {
  createFractalPoints(pointsArray1, fractalPoints1);
  createFractalPoints(pointsArray2, fractalPoints2);
  createFractalPoints(pointsArray3, fractalPoints3);
  createFractalPoints(pointsArray4, fractalPoints4);
}

function createFractalPoints(currentPointsArray, currentFractalPoints) {
  for (let i = 0; i < currentPointsArray.length - 1; i++) {
    let point1 = currentPointsArray[i];
    let point2 = currentPointsArray[i + 1];
    interPolatePoints(point1, point2, currentFractalPoints);
  }
}

function interPolatePoints(point1, point2, currentFractalPoints) {
  let x0 = point1.x;
  let y0 = point1.y;
  let x1 = point2.x;
  let y1 = point2.y;
  for (let x = x0; x < x1; x += 1) {
    // let y = interPolateSmoothStep(x0, y0, x1, y1, x);
    let y = interPolateLinear(x0, y0, x1, y1, x);
    // let y = interPoltateCosinus(x0, y0, x1, y1, x);
    let point = { x: x, y: y };
    currentFractalPoints.push(point);
  }
}

function drawFractalPoinsAverage(cArray1, cArray2, cArray3, cArray4) {
  stroke("#000000");
  strokeWeight(2);
  for (let i = 0; i < cArray1.length - 1; i++) {
    let aX = cArray1[i].x;
    let aY = (cArray1[i].y + cArray2[i].y + cArray3[i].y + cArray4[i].y) / 4;
    let nX = cArray1[i + 1].x;
    let nY =
      (cArray1[i + 1].y +
        cArray2[i + 1].y +
        cArray3[i + 1].y +
        cArray4[i + 1].y) /
      4;
    line(aX, aY, nX, nY);
  }
}

//simple function that interpolates the Points between the first and the second Point
function interPolateLinear(x0, y0, x1, y1, x) {
  return y0 + ((x - x0) / (x1 - x0)) * (y1 - y0);
}

function interPoltateCosinus(x0, y0, x1, y1, x) {
  let t = (x - x0) / (x1 - x0);
  t = 0.5 * (1 - cos(t * Math.PI));
  return y0 + t * (y1 - y0);
}

function interPolateSmoothStep(x0, y0, x1, y1, x) {
  let t = (x - x0) / (x1 - x0);
  t = 6 * Math.pow(t, 5) - 15 * Math.pow(t, 4) + 10 * Math.pow(t, 3);
  return y0 + t * (y1 - y0);
}
