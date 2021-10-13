// Start with A
let current;
// Number of generations
let count;
let StringArray = [];
let anzahl;

function setup() {
  createCanvas(800, 800);
  count = 0;
  current = ["A"];
  anzahl = 10;
  for (let i = 0; i < anzahl; i++) {
    createNewGeneration();
  }
  console.table(current);
}

function draw() {
  background(220);
}

function createNewGeneration() {
  let currentGeneration = current[current.length - 1];
  let newGeneration = "";
  for (let index = 0; index < currentGeneration.length; index++) {
    let letter = currentGeneration.charAt(index);
    if (letter == "A") {
      newGeneration += "ABA";
    } else if (letter == "B") {
      newGeneration += "BBB";
    }
  }
  current.push(newGeneration);
}

function drawTree() {
  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
}