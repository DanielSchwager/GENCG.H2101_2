// initial points array
let points = [];

// all grid arrays (made up of allGridPoint-Arrays)
let pointArrays = [];

// points of the noise pattern (size = width)
let allPoints = [];

let fractalNoisePoints = [];


function setup() {
  createCanvas(512, 512);
  background(0);
  randomSeed(127);

  fractalNoise();
}

function draw() {
  //background(220);
}

function fractalNoise() {
  // let x = 2;
  // for(let i = 0; i < size; i++){
  //     pointArrays[i] = drawGrid(x);
  //     sq(2);
  // }

  pointArrays[0] = drawGrid(4, 128);
  pointArrays[1] = drawGrid(8, 64);
  pointArrays[2] = drawGrid(16, 32);
  pointArrays[3] = drawGrid(32, 16);
  pointArrays[4] = drawGrid(64, 6);
  pointArrays[5] = drawGrid(128, 4);

  combineAllPoints();
}

function drawGrid(frequency, amplitude) {
  // Setup points Array
  let x = 0;
  for (let i = 0; i < frequency; i++) {
    points[i] = point = { x: x, y: Math.floor(random(0, amplitude)) };
    x += (width / frequency);
  }

  // all points on a grid
  let allGridPoints = [];

  let j = 0;
  // interpolate all other points
  for (let i = 0; i < points.length - 1; i++) {
    let x0 = points[i].x;
    let y0 = points[i].y;
    let x1 = points[i + 1].x;
    let y1 = points[i + 1].y;

    for (let x = x0; x < x1; x ++) {
      let smoothY = smoothstep(x0, y0, x1, y1, x);
      allGridPoints[j] = point = { x: x, y: smoothY };
      j++;
    }
  }
  return allGridPoints;
}

function combineAllPoints() {

  // transform 2d Array into 1d Array with all points
  for (let i = 0; i < pointArrays.length; i++){
    allPoints = allPoints.concat(pointArrays[i]);
  }

  // sort the 1d array
  allPoints.sort((a, b) => {
      if (a.x < b.x){
    return -1;
  }
  if (a.x > b.x){
    return 1;
  }
  return 0;
  });

  let indexPoints = 0;
  let fractalPointsIndex = 0;
  while (indexPoints < allPoints.length -1){
    let sum = 0;
    for (let i = 0; i < 6; i++){
      sum += allPoints[indexPoints].y;
      indexPoints++;
    }
    fractalNoisePoints[fractalPointsIndex] = point = {x: allPoints[indexPoints].x, y: sum };
    fractalPointsIndex++;
  }

  drawLines(fractalNoisePoints);
}


function drawLines(fractalNoisePoints) {
  let red = color(255, 0, 0);

  // connect lines
  for (let i = 0; i < fractalNoisePoints.length - 1; i++) {
    set(fractalNoisePoints[i].x, fractalNoisePoints[i].y, red);
  }
  updatePixels();
}

function smoothstep(x0, y0, x1, y1, x) {
  let t = (x - x0) / (x1 - x0);
  return y0 + (-2 * pow(t, 3) + 3 * sq(t)) * (y1 - y0);
}
