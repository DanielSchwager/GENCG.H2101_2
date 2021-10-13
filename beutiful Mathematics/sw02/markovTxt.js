let lines;
let source;
let words;
let dictionary;
let canvas;

function setup() {
  canvas = createCanvas(720, 720);

  createButton("Generate");
  mouseButton.mousePressed;

  lines = loadStrings("./sources/xaver.txt", () => {
    //conert string array to simple string
    lines.forEach((line) => {
      source += line;
      source += "  ";
    });
    // create array containing all words
  });
}

function draw() {
  createCanvas(720, 720);
  background(220);

  displayComment(width, height);
}
