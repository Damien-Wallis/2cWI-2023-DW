let arr = [4, 1, 2, 3];
arr.push(17);
arr.push(199);
let Summe = 0;

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    Summe = Summe + arr[index];
}

console.log("Summe: " + Summe);

let Mittelwert = Summe / arr.length
console.log("Mittelwert: " + Mittelwert);


let Freunde = ["Susi", "Paula", "Hans"];
Freunde.push("Sepp");

console.log("Meine Freunde sind " + Freunde[0] + ", " + Freunde[1] + ", " + Freunde[2] + " und " + Freunde[3]);