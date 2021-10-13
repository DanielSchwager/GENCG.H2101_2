var it = 200;
var x_min = -5.0;
var x_max = 5;
var step_size = 0.01;
var j_max = 200;
var julia = [];
var test_fct = (a, b) => a * b - 1;

class c_num {
  constructor(_Re, _Im) {
    this.Re = _Re;
    this.Im = _Im;

    this.show = function () {
      return "c_num: " + this.Re + "+i" + this.Im;
    };

    this.add = function (other) {
      return new c_num(this.Re + other.Re, this.Im + other.Im);
    };

    this.sub = function (other) {
      return new c_num(this.Re - other.Re, this.Im - other.Im);
    };

    this.mul = function (other) {
      return new c_num(
        this.Re * other.Re - this.Im * other.Im,
        this.Im + other.Re + this.Re * other.Im
      );
    };

    this.konj = function () {
      return new c_num(this.Re, -this.Im);
    };

    this.length = function () {
      return sqrt(this.Re * this.Re + this.Im * this.Im);
    };
  }
}

function setup() {
  createCanvas(300, 300);
  background(220);
  translate(width / 2, height / 2);

  /*
  var t1 = new c_num(5, 6);
  var t2 = new c_num(3, 4);
  print(t1.length());
  print((t1.mul(t2)).show());
  */

  let scale_fact = width / abs(x_max - x_min);
  scale(scale_fact);
  strokeWeight(1 / scale_fact);
  Julia(x_min, x_max, test_fct);
}

function Julia(x_min, x_max, fct) {
  for (x = x_min; x < x_max; x += step_size) {
    let k = 1;
    for (i = 1; i < it; i++) {
      k = fct(k, x);
      if (k >= j_max) break;
    }

    if (k < j_max) {
      julia.push(x);
      point(x, 0, 0);
    }
  }
  print(julia.length);
}
