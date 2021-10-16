# Day 02

## Iterative Patterns

### Brief

Write some code to generate tiling pattern or textural composition. Give consideration to aesthetic issues like symetry, rhythm, color, details at multiple scales; precise balance of form and the balance between organic and geometric forms. The pattern should be designed so that it is infinitely tiled or extended.

## Grid Tutorial

On Tuesday we worked with grids. Since I didn't have much previous knowledge, I watched a tutorial by Daniel Shiffman (https://youtu.be/OTNpiLUSiB4). The tutorial explains how to create a grid and then color it in random shades of gray.

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

## Color Grid

As a challenge I used this code and wanted to colorize the grid.This was possible by making the 2D array 3D. Then I added random values between 0 and 255 to the 3D array.

{% raw %}

<iframe src="projects/Day2_Grid/Grid/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

### Code

```js
function make3Darray(cols, rows, depth) {
  var arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      arr[i][j] = new Array(depth);
    }
  }
  return arr;
}

function make3DcolorArray() {
  colors = make3Darray(cols, rows, depth);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      for (let z = 0; z < depth; z++) {
        colors[i][j][z] = random(255);
      }
    }
  }
}
```

## Grid with Polygons

In the final Product, I used a Polygon class I created in Beautiful Math. This Class lets me create a random Polygon in each tile.

{% raw %}

<iframe src="projects/Day2_Grid/GridArt/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

## Code

The Easy Part was to use the for-loop from the previous examples and draw the outlines of the Clocks. Now to the more difficult part, which was the hands of the clocks. Luckily Nicolas used a similar technique in his Project, so I could use some of his code. The atan2() function calculates the angle from the mouse pointer to the center of each grid. Now it's easy to draw a line from the center of the grid to the outside of the circle using grid center + cos(angle) \* length

```js
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      var x = i * gridX;
      var y = j * gridY;
      fill(colors[i][j]);
      stroke(0);
      rect(x, y, gridX, gridY);
      // circle(x + gridX / 2, y + gridY / 2, gridX, gridY);
      // let polygon = new Polygon(3, gridY);
      let polygon = new Polygon(int(random(2, 11)), gridX / 2);
      polygon.create(x + gridX / 2, y + gridY / 2);
    }
  }
}
```

### Clocks

To further deepen my understanding for grids, I wanted to make a grid full of Clock alike shapes, which follow the mouse courser.

{% raw %}

<iframe src="projects/Day2_Grid/Grid_Clocks/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

## Code

The Easy Part was to use the for-loop from the previous examples and draw the outlines of the Clocks. Now to the more difficult part, which was the hands of the clocks. Luckily Nicolas used a similar technique in his Project, so I could use some of his code. The atan2() function calculates the angle from the mouse pointer to the center of each grid. Now it's easy to draw a line from the center of the grid to the outside of the circle using grid center + cos(angle) \* lenght.

```js
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
      //Some helpful Code from Nicolas, which I changed to fit my project.
      // line(x + gridX / 2, y + gridY / 2, mouseX, mouseY);
      let angle = atan2(mouseY - y - gridY / 2, mouseX - x - gridX / 2);
      line(
        x + gridX / 2,
        y + gridY / 2,
        x + gridX / 2 + cos(angle) * lineLength,
        y + gridY / 2 + sin(angle) * lineLength
      );
    }
  }
}
```
