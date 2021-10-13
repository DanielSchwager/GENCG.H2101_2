const schwellenwert = 50;

function setup() {
  createCanvas(400, 400);

  let z1 = createKomplexeZahl(5, 10);
  let z2 = createKomplexeZahl(4, 17);
  let resultat = juliaMenge(-2, 2, 0.1);
  console.log(resultat);
}

function draw() {
  background(220);
}

function juliaMenge(von, bis, fct) {
  for (let i = von; i <= bis; i + fct) {}
}

function iterating(zahl) {
  for (i = 0; i > 200; i++) {
    if (iGetLenght(zahl) > schwellenwert) {
      iMultiplikation(zahl, zahl) - 1;
    }
  }
  if (i <= 199) {
    point(zahl.a, zahl.ib);
  }
}
function iGetLenght(zahl) {
  return Math.sqrt(pow(zahl.a, 2) + pow(zahl.ib, 2));
}

function createKomplexeZahl(a, ib) {
  return {
    a,
    ib,
  };
}

// let zahl = {
//   a: a,
//   b: ib,
// };

function iAddition(zahl1, zahl2) {
  let aktuellesResultat = {};
  aktuellesResultat.a = zahl1.a + zahl2.a;
  aktuellesResultat.ib = zahl1.ib + zahl2.ib;
  return aktuellesResultat;
}

function iSubtraktion(zahl1, zahl2) {
  let aktuellesResultat = {};
  aktuellesResultat.a = zahl1.a - zahl2.a;
  aktuellesResultat.ib = zahl1.ib - zahl2.ib;
  return aktuellesResultat;
}

function iMultiplikation(zahl1, zahl2) {
  let aktuellesResultat = {};
  aktuellesResultat.a = zahl1.a * zahl2.a - zahl1.ib * zahl2.ib;
  aktuellesResultat.ib = zahl1.a * zahl2.ib + zahl1.ib * zahl2.a;
  return aktuellesResultat;
}

//noch Fehlerhaft
function iDivision(zahl1, zahl2) {
  let aktuellesResultat = {};
  aktuellesResultat.a =
    (1 / (pow(zahl2.a, 2) + (zahl2.ib, 2))) *
    (zahl1.a * zahl2.a + zahl1.ib * zahl2.ib);
  aktuellesResultat.ib = zahl1.ib * zahl2.a - zahl1.a * zahl2.ib;
  return aktuellesResultat;
}

function quadrieren(x) {
  resultat = x * x;
}
