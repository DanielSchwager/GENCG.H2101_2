var angle = 0;
var r = 10;

var spin = 0.1;
var grow = spin * 5;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let a = 30;
for(let i = 0; i < 10; i++){
  for(let j = 0; j < 10; j++){
    beginShape(TRIANGLE_STRIP);
    vertex(a, 75);
    vertex(a+=10, 20);
    vertex(a+=10, 75);
    vertex(a+=10, 20);
    a-=10;
    rotate(i);
    endShape();
  }
}
}