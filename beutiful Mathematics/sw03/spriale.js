var angle = 0;
var r = 10;
var tiefe = 10;

var spin = 0.1;
var grow = spin * 5;

function setup() {
  createCanvas(800, 800,  WEBGL);
  createEasyCam();
  document.oncontextmenu = function () {
    return false;
  };
  document.onmousedown = function () {
    return false;
  };
}

function draw() {
    background(220);
  angle += spin;
  r = r + grow;
  //   r = noise(angle) * 100;
  // Polar to Cartesian Transformation
  var x = cos(angle) * r;
  var y = sin(angle) * r;

  translate(200, 200, 0);

  //line(0, 0, x, y);
  ellipse(x, y, 20, 20);
}

// function draw() {
//   let a = 30;
//   let b1 = 75;
//   let b2 = 20;
//   translate(-700, -400);
//   for(let i = 0; i < 10; i++){

//     for(let j = 0; j < 30; j++){
//       beginShape(TRIANGLE_STRIP);
//       vertex(a, b1);
//       vertex(a+=10, b2);
//       vertex(a+=10, b1);
//       vertex(a+=10, b2);
//       a-=10;

//       endShape();
//     }
//     b1 += 55;
//     b2 += 55;
//     a = 30;
//   }

// }
