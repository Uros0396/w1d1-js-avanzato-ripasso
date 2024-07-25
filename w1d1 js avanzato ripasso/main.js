//es. 1////////////////////////////////////////////////////

function chekNum(x, y) {
    if (x === 50 || y === 50 || x + y === 50) {
        return true;
    } else {
        return false
    }
}
console.log(chekNum(50, 4));

//es. 2///////////////////////////////////////////////////////

let arrayWords = ["ciao", "casa", "finestra"]

let newArray = arrayWords.map(index => index.slice(1));
console.log(newArray);



//es. 3/////////////////////////////////////////////////////////

function checkNumber(x, y) {
    if (x > 40 && x < 60 || y > 40 && y < 60 || x > 70 && x < 100 || y > 70 && y < 100 ) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNumber(45, 72));

//es. 4////////////////////////////////////////////////////////

function nameCities(city) {
    if (city.includes("los" || "new")) {
        return true;
    } else {
        return false;
    }
}
console.log(nameCities("lossantos"));

//es. 5//////////////////////////////////////////////////////////

let arrayNumbers = [2, 4, 5, 8];

function sumNumbers(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
         sum += array[i];
    }
    return sum;
}


console.log(sumNumbers(arrayNumbers));

//es. 6/////////////////////////////////////////////////////////
let arrayN = [2, 5, 6, 8]
let checkNum = (array) => {
  for(let i = 0; i < array.length; i++) {
    if (array[i] !== 1 && array[i] !== 3) {
        return true;
    } else {
        return false;
    }
  }
}
console.log(checkNum(arrayN));

//es. 7////////////////////////////////////////////////////////////

let checkCorner = (corner) => {
        if(corner === 90) {
            return "angolo retto"
        } else if (corner > 90 && corner < 180)  {
            return "ottuso"
        } else if (corner < 90) {
            return "acuto"
        } else if (corner === 180) {
            return "piatto"
        }

        
}
console.log(checkCorner(90));
//es. 8////////////////////////////////////////////////////////////

let stringAuto = "federazione italiana automobili torino"
let acronim = (string) => {
        return string.split(" ").map(word => word[0].toUpperCase()).join("");
}

console.log(acronim(stringAuto));


//esercizi extra//////////////////////////////////////////////////////

//1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.



//. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.



let checkWords = (string, string2) => {
    let stringToLowerCase = (str) => {
       return str.toLowerCase();
    }
    let newStrin = stringToLowerCase(string);
    let newStrin2 = stringToLowerCase(string2);

    return newStrin.split("").sort().join("") === newStrin2.split("").sort().join("");

}

console.log(checkWords("recanti", "carento"));


//3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
//esercizio 3 fare il sort di tutti i caretteri e vedere se sono uguali
//fare un ciclo for e vedere se gli angrammi che passo sono uguali


// Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

let checkIsPalindrome = (string) => {
    let newString = string.split("").reverse().join("")
    if (string === newString) {
        return true;
    } else {
        return false;
    }
}
console.log(checkIsPalindrome("anna"));

//. 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981