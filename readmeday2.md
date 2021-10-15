# Day 02

## Iterative Patterns

### Brief

Write some code to generate tiling pattern or textural composition. Give consideration to aesthetic issues like symetry, rhythm, color, details at multiple scales; precise balance of form and the balance between organic and geometric forms. The pattern should be designed so that it is infinitely tiled or extended.

## Grid Tutorial

On Tuesday we worked with grids. Since I didn't have much previous knowledge, I watched a tutorial by Daniel Shifferman (https://youtu.be/OTNpiLUSiB4). The tutorial explains how to create a grid and then color it in random shades of gray.

{% raw %}

<iframe src="projects/Day2_Grid/CT_2D_Array/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

```js
//creating the 2D Array
function make2Darray(cols, rows) {
  var arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
function setup() {
  createCanvas(400, 400);
  gridX = width / cols;
  gridY = height / rows;

  colors = make2Darray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      colors[i][j] = random(255);
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      var x = i * gridX;
      var y = j * gridY;
      fill(colors[i][j]);
      stroke(0);
      rect(x, y, gridX, gridY);
    }
  }
}
};
```

### 3D Color Grid

{% raw %}

<iframe src="projects/Day2_Grid/Grid/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

{% raw %}

## Grid with Polygons

{% raw %}

<iframe src="projects/Day2_Grid/GridArt/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

### Clocks

<iframe src="projects/Day2_Grid/radiantlines/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}
