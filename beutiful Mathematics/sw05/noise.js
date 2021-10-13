const size = 1028;
let step = 16;
let  window;

window.setup =  function setup() {
    createCanvas(size,size);

    createNoise();
    noLoop();
}

window.draw = function draw() {
    background(0);
    noStroke();

    drawNoise();
}

function drawNoise() {
    const smallstep = step * step;
    for(let i = 0; i < noise1d.lenght -1; i++) {
        const current = noise1d[i];
        const next = noised1d
    }
}