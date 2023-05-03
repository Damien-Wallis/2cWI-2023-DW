//Aufgabe 1
for (let index = 0; index < 4; index++) {
    if (index % 2 == 0) {
        console.log("XXXX");
    } else {
        console.log("OOOO");
    }
}

//Aufgabe 2
let result = 0;
for (let index = 1; index <= 101; index++) {
    if (index % 2 == 0) {
        result += index;
    }
}
console.log(result);

//Aufgabe 3
for (let index = 0; index < 6; index++) {
    if (index == 0) {
        console.log("XXXXXX");
    }

    if (index == 1) {
        console.log("X     X");
    }

    if (index == 2) {
        console.log("X      X");
    }

    if (index == 3) {
        console.log("X      X");
    }

    if (index == 4) {
        console.log("X     X");
    }

    if (index == 5) {
        console.log("XXXXXX");
    }
}