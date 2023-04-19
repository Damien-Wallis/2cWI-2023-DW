//Variablen
let randomNumber = Math.random() * 100;
let Zahl1 = Math.floor(randomNumber);
let randomNumber2 = Math.random() * 100;
let Zahl2 = Math.floor(randomNumber2);
let Mini = 50;

if ((Zahl1 < Zahl2) && (Zahl1 < Mini)) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}

if ((Zahl1 < 30) || (Zahl2 < 30)) {
    console.log("Eine der beiden ist kleiner als 30");
}

if ((Zahl1 < 50) && (Zahl2 != 50)) {
    console.log("Erste Zahl klein, zweite kein 50er");
}