import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            // readline.close();
        });
    });
};


let running = true;
let kontostand = 42;

console.log("bitte Funktion auswählen:")
console.log("1. Einzahlen")
console.log("2. Abheben")
console.log("3. Kontostand")
console.log("4. Beenden")

while (running) {
    let action = await readLineAsync();

//Einzahlen
    if (action === "1") {
        console.log("zu einzahlender Betrag:")
        let einzahlen = await readLineAsync();
        kontostand += einzahlen;
        console.log("Sie haben " + einzahlen + " € eingezahlt!")
    }

//Abheben
    if (action === "2") {
        console.log("zu abhebender Betrag:")
        let abheben = await readLineAsync();
        kontostand -= abheben;
        console.log("Sie haben " + abheben + " € abgehoben.")
    }

//Kontostand
    if (action === "3") {
        console.log("Kontostand: " + kontostand + "€")
    }

//Stopp
    if (action === "4") {
        console.log("Maschine stoppen!")
        running = false;
    }
}
