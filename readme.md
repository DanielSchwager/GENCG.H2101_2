# Day 01

## Computing without computer

## Intro

Today's topic was very open.  I have been interested in meditation for a long time, and the flower of life is a reoccurring symbol. It is a basic shape consisting of overlapping circles. The oldest-known example of the Flower Of Life is at least 6000 years old and dates all the way back to Ancient Egypt.
I tried to recreate the flower of life in javascript. To get a better idea of the shape, I sketched one with pencil and paper.

## Seed of Life

To draw a flower of life, start with a circle. Now draw another circle with the same radius, whose center is on the line of the first circle. Repeat this 5 times at the intersections of the circles.
around the first circle. The shape that emerges is called the Seed of Life.

### Sketch

![Seed of Life Sketch](Dokumentation/Tag 1/Seedoflife.png)

### P5.js

{% raw %}

<iframe src="projects/Day1_Intro/SeedOfLife/index.html" width="100%" height="300" frameborder="no"></iframe>
{% endraw %}

### Code

simple code with many repetitions

```js
function drawSeed() {
  circle(0, 0, diameter);
  push();
  translate(radius, 0);
  circle(0, 0, diameter);
  pop();
  push();
  translate(-radius, 0);
  circle(0, 0, diameter);
  pop();
  push();
  translate(radius / 2, (Math.sqrt(3) / 2) * radius);
  circle(0, 0, diameter);
  pop();
  push();
  translate(-radius / 2, (Math.sqrt(3) / 2) * radius);
  circle(0, 0, diameter);
  pop();
  push();
  translate(radius / 2, -(Math.sqrt(3) / 2) * radius);
  circle(0, 0, diameter);
  pop();
  push();
  translate(-radius / 2, -(Math.sqrt(3) / 2) * radius);
  circle(0, 0, diameter);
  pop();
}
```

simplification with for-loop

```js
function drawSeed4() {
  circle(0, 0, diameter);
  push();
  translate(radius, 0);
  rotate(300);
  for (let i = 0; i < 6; i++) {
    circle(0, 0, diameter);
    rotate(300);
    translate(radius, 0);
  }
  pop();
}
```

## Egg of Life

The ‘Egg of Life’ is also a symbol composed of seven circles taken from the design of the Flower of Life. The shape of the Egg of Life is said to be the shape of a multi-cellular embryo in its first hours of creation.(https://www.tokenrock.com/subjects/flower-of-life/)

### Sketch

![Egg of Life Sketch](Dokumentation/Tag 1/Eggoflife.png)

### P5.js

{% raw %}

<iframe src="projects/Day1_Intro/EggOfLife/index.html" width="100%" height="600" frameborder="no"></iframe>
{% endraw %}

### Code

```js
function drawEggOfLife2() {
  let length = 2 * radius * sin(120 / 2);
  for (let i = 0; i < 2; i++) {
    rotate(60);
    for (let i = 0; i < 3; i++) {
      push();
      translate(length, 0);
      circle(0, 0, diameter);
      pop();
      rotate(120);
    }
  }
  circle(0, 0, diameter);
}
```

## Fruit of Life

The ‘Fruit of Life’ symbol is composed of 13 circles taken from the design of the Flower of Life. It is said to be the blueprint of the universe, containing the basis for the design of every atom, molecular structure, life form, and everything in existence. It contains the geometric basis for the delineation of Metatron’s Cube, which brings forth the platonic solids.(https://www.tokenrock.com/subjects/flower-of-life/)

### Sketch

![Fruit of Life Sketch](Dokumentation/Tag 1/Fruitoflife.png)

### P5.js

{% raw %}

<iframe src="projects/Day1_Intro/FruitofLife/index.html" width="100%" height="600" frameborder="no"></iframe>
{% endraw %}

### Code

```js

```

<iframe src="projects/Day1_Intro/FlowerofLife/index.html" width="100%" height="600" frameborder="no"></iframe>
## FLower of Life

![Flower of Life Sketch](Dokumentation/Tag 1/Sketch_1.png)
{% raw %}

<iframe src="projects/Day1_Intro/FlowerofLife/index.html" width="100%" height="600" frameborder="no"></iframe>
{% endraw %}
```js
```
