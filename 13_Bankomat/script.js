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
let kontostand = 0;

console.log("Selektieren Sie die gewünschte Funktion:")
console.log("1. Einzahlen")
console.log("2. Abheben")
console.log("3. Kontostand")
console.log("4. Ende")

while (running) {
    let action = await readLineAsync();

    if (action === "1") {
        console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:")
        let einzahlen = await readLineAsync();
        kontostand += einzahlen;
        console.log("Sie haben " + einzahlen + " Euro eingezahlt!")
    }

    if (action === "2") {
        console.log("Wie viel würden Sie gerne abheben?")
        let abheben = await readLineAsync();
        kontostand -= abheben;
        console.log("Sie haben " + abheben + " Euro abgehoben.")
    }

    if (action === "3") {
        console.log("Der Kontostand beträgt: " + kontostand)
    }

    if (action === "4") {
        console.log("Maschine stoppt!")
        running = false;
    }
}
