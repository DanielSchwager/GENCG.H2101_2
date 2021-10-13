var axiom = "F";
var sentence = axiom;
var len = 300;
var angle;
var M = [];

var rules = [];
rules[0] = {
  a: "F",
  b: "|[-F][+F]",
};

function generate() {
  var nextSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (let j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function turtle() {
  background(51);
  len = 300;
  resetMatrix();
  translate(width / 2, height);
  stroke(255, 100);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle);
    } else if (current == "[") {
      M.push(len);
      push();
    } else if (current == "]") {
      len = M.pop();
      pop();
    } else if (current == "|") {
      len *= 0.5;
      line(0, 0, 0, -len);
      translate(0, -len);
    }
  }
}
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.canvas.addEventListener("click", generate);
  angleMode(DEGREES);
  angle = 20;
  background(51);
  createP(axiom);
  turtle();
  // var button = createButton("generate");
  // button.mousePressed(generate);
}
