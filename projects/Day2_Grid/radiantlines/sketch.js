var cols;
var rows;
var gridX;
var gridY;
var lineWidth;

function setup() {
  createCanvas(400, 400);
  cols = 10;
  rows = 10;
  gridX = width / cols;
  gridY = height / rows;
  lineWidth = gridX / 2;
}

function draw() {
  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      var x = i * gridX;
      var y = j * gridY;
      stroke(0);
      // rect(x, y, gridX, gridY);
      // line(x, y, x + j * gridX, y + i * gridY);
      // line(x, y, x + gridX, y + int(random(0, gridY)));

      /// Uhren
      noFill();
      circle(x + gridX / 2, y + gridY / 2, gridX);
      // line(x + gridX / 2, y + gridY / 2, mouseX, mouseY);
      let angle = atan2(mouseY - y + gridY / 2, mouseX - x + gridX / 2);
      line(
        x + gridX / 2,
        y + gridY / 2,
        x + gridX / 2 + (cos(angle) * lineWidth) / 2,
        y + gridY / 2 + sin(angle) * lineWidth
      );
    }
  }
}
