let steps;

let pointsArray;

function setup() {
  createCanvas(800, 800);
  steps = 16;
  pointsArray = [];
}

function draw() {
  background(220);
  randomSeed(137);
  let firstPoint = {x: 0, y: height / 2}
  pointsArray.push(firstPoint);
  for (i = 1; i <= steps; i++) {
    let x = i * width / steps;
    let y = random(0, height + 1);
    ellipse(x, y, 10, 10);
    let point = {x , y};
    pointsArray.push(point);
    clear();
  }

  for (let i = 0; i < pointsArray.length - 1; i++) {
    let point1 = pointsArray[i];
    let point2 = pointsArray[i+1];
    connectPoints(point1, point2);
    }

  }

function connectPoints(point1, point2) {
  stroke("#000000");
  strokeWeight(2);
  let x0 = point1.x;
  let y0 = point1.y;
  let x1 = point2.x;
  let y1 = point2.y;
for (let x = x0; x < x1; x += 0.1) {
  // let y = interPolateLinear(x0, y0, x1, y1 , x);
  // let y = interPoltateCosinus(x0, y0, x1, y1 , x);
  let y = interPolateSmoothStep(x0, y0, x1, y1 , x);
  point(x, y);
}
}

//simple function that interpolates the Points between the first and the second Point
function interPolateLinear(x0, y0, x1, y1, x){
  return y0 + (x - x0) / (x1 - x0) * (y1 - y0);
}

//interpolation with cosinus
function interPoltateCosinus(x0, y0, x1, y1, x) {
  let t = (x - x0) / (x1 - x0);
  t = 0.5 * (1- cos(t*Math.PI) );
  return y0 + t * (y1 - y0);
}

function interPolateSmoothStep(x0, y0, x1, y1, x) {
  let t = (x - x0) / (x1 - x0);
  t = 6 *  Math.pow(t, 5) - 15 * Math.pow(t, 4) + 10 * Math.pow(t,3)
  return y0 + t * (y1 - y0);
}