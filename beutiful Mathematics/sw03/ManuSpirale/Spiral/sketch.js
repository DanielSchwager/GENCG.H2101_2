let vertices = [];
let circleSteps = 8;
let circles = 0;
let img;
let spiralDepth = 5;
let spiralRadiusInc = 3;
let spiralSteps = 10;

function preload() {
  img = loadImage('assets/Rock.jpg');
}

function setup() {
  // put setup code here
  createCanvas(800, 800, WEBGL);
  // textureWrap(REPEAT);

  createEasyCam();
  document.oncontextmenu = function () { return false; }
  document.onmousedown = function () { return false; }

  angleMode(DEGREES);
}

function draw() {
  background(220);
  // ambientLight(60, 60, 60);
  // translate(-width/2, -height/2);
  let locX = height / 2;
  let locY = width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  drawSpiralArchi();
  // drawDonut();

  drawVertices();
}

function drawVertices() {
  // textureMode(NORMAL)
  // texture(img);
  
  beginShape(TRIANGLE_STRIP);
  for (let c = 0; c <= circles; c++) {
    for (let i = 0; i <= circleSteps; i++) {
      let n = i + (c * circleSteps);
      
      let v = vertices[n];
      let v2 = vertices[n + circleSteps + 1];
      
      if (v2) {
        vertex(v[0], v[1], v[2]);
        vertex(v2[0], v2[1], v2[2]);
      }
    }
  }
  endShape();
}

function drawDonut() {
  circles = 0;
  let r = 100;

  beginShape(POINTS);
  for (let i = 0; i <= 360; i += 10) {
    let x = r * sin(i);
    let y = r * cos(i);
    let z = 0;
    
    // vertex(x, y, 0);
    
    pushCircleVertices(x, y, z, 10, i); //Switch x with z
    circles++;
  }
  endShape();
}

function drawSpiralArchi() {
  circles = 0;
  let maxI = 500;
  let r = 1;
  let z = 0;

  beginShape(POINTS);
  for (let i = 0; i < maxI; i += spiralSteps) {
    x = r * sin(i);
    y = r * cos(i);

    vertex(x, y, z);
    r += spiralRadiusInc;
    z += spiralDepth;

    circles++;

    pushCircleVertices(x, y, z, map(i, 0, maxI, 1, 200), i);
  }
  endShape();
}

function pushCircleVertices(x, y, z, r, deg) {
  let step = 360 / circleSteps;
  let origin = vec3.fromValues(0, 0, 0);
  let vOG = vec3.fromValues(x, y, z);

  for (let i = 0; i <= 360; i += step) {
    let xc = x + r * sin(i);
    let yc = y + r * cos(i);
  
    let vc = vec3.fromValues(xc, yc, z);
    let vR = vec3.create();
    vec3.rotateY(vR, vc, vOG, PI/2);
    vec3.rotateZ(vR, vR, vOG, -deg * (PI/180));
    
    vertices.push([vR[0], vR[1], vR[2]]);
  }
}
