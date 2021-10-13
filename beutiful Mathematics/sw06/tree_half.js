var axiom = "F";
var sentence = axiom;
var len;
var angle;
var M = [];
var counter = 0;

//		§ | : Zeichne Strich mit Länge d=128 und verändere aktuelle Länge d *= f -> d = 0.5*128 = 64 => d, p
//  [ : Speichere Werte, erhöhe k => M[0] = {d = 64, a, p}, k=1
//  minus : drehen => a
//  F : zeichne Strich mit aktueller Länge d=64 => neu p
//  ] : k verkleinern, Werte zurücksetzten aus M[k], M[k] leeren => k=0, M[0], d,a,p
//  [ : Speichere Werte, erhöhe k => M[0], k=1
//  plus : drehen => verändert :  a
//  F : zeichne Strich mit aktueller Länge => p
//  ] : k verkleinern, Werte zurücksetzten aus M[k], M[k] leeren => k=0, M[0], d,a,p

var rules = [];
rules[0] = {
  a: "F",
  b: "|[-F][+F]F[+F][-F]F",
  // b: "|[-F]F[+F]F",
  c: "|[+F]F[-F]F",
};

function generate() {
  counter++;
  var nextSentence = "";
  if (counter <= 5) {
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
  } else {
    for (let i = 0; i < sentence.length; i++) {
      var current = sentence.charAt(i);
      var found = false;
      for (let j = 0; j < rules.length; j++) {
        if (current == rules[j].a) {
          found = true;
          nextSentence += rules[j].c;
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
  console.log("ello");
}

function turtle() {
  background(51);
  len = 200;
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
  canvas.canvas.addEventListener("click", () => {
    generate();
    counter++;
  });
  angleMode(DEGREES);
  angle = 20;
  background(51);
  createP(axiom);
  turtle();
  // var button = createButton("generate");
  // button.mousePressed(generate);
}
