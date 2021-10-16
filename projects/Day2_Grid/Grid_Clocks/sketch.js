var cols;
var rows;
var gridX;
var gridY;
var lineLength;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  cols = 10;
  rows = 10;
  gridX = width / cols;
  gridY = height / rows;
  lineLength = gridX / 2;
}

function draw() {
  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      var x = i * gridX;
      var y = j * gridY;
      stroke(0);

      /// Uhren
      noFill();
      circle(x + gridX / 2, y + gridY / 2, gridX);
      //Some Helpful Code from Nicolas, which I changed to fit my project.
      // line(x + gridX / 2, y + gridY / 2, mouseX, mouseY);
      let angle = atan2(mouseY - y + gridY / 2, mouseX - x + gridX / 2);
      line(
        x + gridX / 2,
        y + gridY / 2,
        x + gridX / 2 + cos(angle) * lineLength,
        y + gridY / 2 + sin(angle) * lineLength
      );
    }
  }
}
