function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function supercalculation(a, b) {
    return (a + b) / 2 * a;
}

function printEasterDate(year) {
    let J = 2024;
    let N = J - 1000;
    let A = N % 19;
    let B = (7 * A + 1) / 19;
    let M = (11 * A + 4 - B) % 29;
    let Q = Math.floor(N / 4);
    let W = (N + Q + 31 - M) % 7;
    let P = Math.floor(25 - M - W);
    let X = P + 31;

    if (P > 0) {
        console.log("Ostersonntag ist der " + P + ". April");
    }
    else {
        console.log("Ostersonntag ist der " + X + ". März");
    }
}

printEasterDate(2024);

let Summe = add(10, 3);
console.log("Summe: " + Summe);

let Differenz = subtract(10, 3);
console.log("Differenz: " + Differenz);

let Produkt = multiply(10, 3);
console.log("Produkt: " + Produkt);

let result = supercalculation(10, 3);
console.log("Ergebnis: " + result);