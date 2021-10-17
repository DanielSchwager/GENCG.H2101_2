// Forked from https://editor.p5js.org/lingdong/sketches/ef6FB-uNq
// --> https://github.com/LingDong-/ Check his work!

// A choice for number of keypoints: 7,33,68,468

// === bare minimum 7 points ===
// let VTX = VTX7;

// === important facial feature 33 points ===
let VTX = VTX33;

// === standard facial landmark 68 points ===
// let VTX = VTX68;

// === full facemesh 468 points ===
// let VTX = VTX468;

// select the right triangulation based on vertices
let TRI;
if (VTX == VTX7) {
  TRI = TRI7;
} else if (VTX == VTX33) {
  TRI = TRI33;
} else if (VTX == VTX68) {
  TRI = TRI68;
} else {
  TRI = TRI468;
}

// this will be loaded with the facemesh model
// WARNING: do NOT call it 'model', because p5 already has something called 'model'
let facemeshModel = null;

// is webcam capture ready?
let videoDataLoaded = false;

let statusText = "Loading facemesh model...";

// faces detected in this browser
// currently facemesh only supports single face, so this will be either empty or singleton
let myFaces = [];

// webcam capture, managed by p5.js
let capture;

// Load the MediaPipe facemesh model assets.
facemesh.load().then(function (_model) {
  console.log("model initialized.");
  statusText = "Model loaded.";
  facemeshModel = _model;
});

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  capture = createCapture(VIDEO);

  // this is to make sure the capture is loaded before asking facemesh to take a look otherwise facemesh will be very unhappy
  capture.elt.onloadeddata = function () {
    console.log("video initialized");
    videoDataLoaded = true;
  };

  capture.hide();
}

// draw a face object returned by facemesh
function drawFaces(faces, filled) {
  for (let i = 0; i < faces.length; i++) {
    const keypoints = faces[i].scaledMesh;

    for (let j = 0; j < keypoints.length; j++) {
      const [x, y, z] = keypoints[j];
      circle(x, y, 5);
      push();
      strokeWeight(1);
      text(j, x, y);
      pop();
    }

    for (let j = 0; j < TRI.length; j += 3) {
      let a = keypoints[TRI[j]];
      let b = keypoints[TRI[j + 1]];
      let c = keypoints[TRI[j + 2]];

      if (filled) {
        let d = [(a[0] + b[0] + c[0]) / 6, (a[1] + b[1] + c[1]) / 6];
        let color = get(...d);
        fill(color);
        noStroke();
      }
      triangle(a[0], a[1], b[0], b[1], c[0], c[1]);
    }
  }
}

// draw a face object returned by facemesh
function drawFacesCensored(faces, filled) {
  for (let i = 0; i < faces.length; i++) {
    const keypoints = faces[i].scaledMesh;

    //censur Eyes
    //Left Eye Coordinates(0,1,7,8)
    const [x0, y0, z0] = keypoints[0];
    //Right Eye Coordinates(2,3,9,10)
    const [x3, y3, z3] = keypoints[3];
    //
    let cWidth = 1.3;
    let product = Math.pow(x3 - x0, 2) + Math.pow(y3 - y0, 2);
    let lengthEyes = Math.sqrt(product) * cWidth;
    let cencorHeight = 40;

    let eyesCenterX = (x0 + x3) / 2;
    let eyesCenterY = (y0 + y3) / 2;
    circle(eyesCenterX, eyesCenterY, 20);
    translate(eyesCenterX, eyesCenterY);
    //Calculates angle from the center to the right eye
    let angle = atan2(y3 - eyesCenterY, x3 - eyesCenterX);
    rotate(angle);
    noStroke();
    fill("black");
    rect(-lengthEyes / 2, -cencorHeight / 2, lengthEyes, cencorHeight);

    censorFieldsWidth = 7;
    censorFieldsHeight = 3;
    for (let i = 0; i < censorFieldsWidth; i++) {
      for (let j = 0; j < censorFieldsHeight; j++) {
        rect(
          -lengthEyes / 2 + (i * lengthEyes) / censorFieldsWidth,
          -cencorHeight / 2 + (j * cencorHeight) / censorFieldsHeight,
          lengthEyes / censorFieldsWidth,
          cencorHeight / censorFieldsHeight
        );
      }
    }

    for (let j = 0; j < TRI.length; j += 3) {
      let a = keypoints[TRI[j]];
      let b = keypoints[TRI[j + 1]];
      let c = keypoints[TRI[j + 2]];

      if (filled) {
        let d = [(a[0] + b[0] + c[0]) / 6, (a[1] + b[1] + c[1]) / 6];
        let color = get(...d);
        fill(color);
        noStroke();
      }
      // triangle(a[0], a[1], b[0], b[1], c[0], c[1]);
    }
  }
}

// reduces the number of keypoints to the desired set
// (VTX7, VTX33, VTX68, etc.)
function packFace(face, set) {
  let ret = {
    scaledMesh: [],
  };
  for (let i = 0; i < set.length; i++) {
    let j = set[i];
    ret.scaledMesh[i] = [
      face.scaledMesh[j][0],
      face.scaledMesh[j][1],
      face.scaledMesh[j][2],
    ];
  }
  return ret;
}

function draw() {
  //otherwise super gnarly
  strokeJoin(ROUND);

  // if model and video both loaded,
  if (facemeshModel && videoDataLoaded) {
    facemeshModel.estimateFaces(capture.elt).then(function (_faces) {
      // we're faceling an async promise best to avoid drawing something here!
      // it might produce weird results due to racing

      // update the global myFaces object with the detected faces
      myFaces = _faces.map((x) => packFace(x, VTX));

      // console.log(myFaces);
      if (!myFaces.length) {
        // haven't found any faces
        statusText = "Show some faces!";
      } else {
        // display the confidence, to 3 decimal places
        const confidence =
          Math.round(_faces[0].faceInViewConfidence * 1000) / 1000;
        statusText = "Confidence: " + confidence;
      }
    });
  }

  background(200);

  // first draw the debug video and annotations
  push();
  // downscale the webcam capture so it doesn't take up too much screen sapce
  scale(2);
  image(capture, 0, 0, capture.width, capture.height);
  noFill();
  stroke(255, 0, 0);
  // draw my face skeleton
  drawFacesCensored(myFaces);
  pop();

  // now draw all the other users' faces (& drawings) from the server
  // push();
  // scale(2);
  // strokeWeight(2);
  // noFill();
  // stroke(255, 0, 0);
  // drawFaces(myFaces);
  // pop();

  // push();
  // fill(255, 0, 0);
  // text(statusText, 2, 60);
  // pop();
}
