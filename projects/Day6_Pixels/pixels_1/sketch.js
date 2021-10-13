function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(155);
  noStroke();
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 100);
}

function draw() {
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let indexR = (x + y * width) * 4;

      let r = pixels[indexR + 0];
      let g = pixels[indexR + 1];
      let b = pixels[indexR + 2];
      let a = pixels[indexR + 3];

      pixels[indexR + 2] = 255;
    }
  }

  updatePixels();
}
