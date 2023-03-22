let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleAverageWeight = 0.34;
let bananaAverageWeight = 0.22;

//Anzahl Bananen pro Kilo
let bananaPerKilo = 1 / bananaAverageWeight;
console.log(bananaPerKilo + " Bananen wiegen 1 Kilo");

//Anzahl Apfel pro Kilo
let applePerKilo = 1 / appleAverageWeight;
console.log(applePerKilo + " Äpfel wiegen 1 Kilo");

//Preis pro Banane
let pricePerBanana = bananaPricePerKilo / bananaPerKilo;
console.log("Eine Banane kostet " + pricePerBanana);

//Preis pro Apfel
let pricePerApple = applePricePerKilo * appleAverageWeight;
console.log("Ein Apfel kostet " + pricePerApple);

//Preis von 8 Äpfeln
let applePrice8 = pricePerApple * 8;
console.log("Preis von 8 Äpfeln = " + applePrice8 + "€");

//Preis von 17 Bananen
let bananaPrice17 = pricePerBanana * 17;
console.log("Preis von 17 Bananen = " + bananaPrice17 + "€");

//Preis von 1 Tonne Äpfel
let appleWeight1000 = applePricePerKilo * 1000;
console.log("Preis von 1 Tonne Äpfel = " + appleWeight1000 + "€");

//Preis von 1 Tonne Bananen
let bananaWeight1000 = bananaPricePerKilo * 1000;
console.log("Preis von 1 Tonne Bananen = " + bananaWeight1000 + "€");