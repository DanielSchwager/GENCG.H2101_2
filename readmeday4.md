# Day 04

## Drawing Machines

### Brief

Create a program that expands, augment, distort, questions, complicate, interpret, improves the act of drawing. Explain what your system is about: is it a tool? A statement? a game? Use your tool to create your original series of at least 3 drawings. 1

## Drawing Machine 1

{% raw %}

<iframe src="projects/Day4_Machines/Machine_1/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

### Code

```js
function drawLinesIteration() {
  stroke("red");
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < i; j++) {
      linePoints(points[i], points[j]);
    }
  }
}
```

{% raw %}

<iframe src="projects/Day4_Machines/Machine_1.2/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

```js
function drawShapes() {
  fill(0);
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let x = points[i][0];
    let y = points[i][1];
    curveVertex(x, y);
  }
  endShape(CLOSE);
}
```
