/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userChoice = prompt('Pari o Dispari? (scrivi la tua scelta');
let userNumb = parseInt(prompt('Scegli un numero da 1 a 5'));

//funzione per scegliere un numero tra min e max
let max = 5;
let x = 0;

function randomInt(max) {
    x = Math.ceil(Math.random()*max);
    console.log(x);
    return x;
}
//estraggo il numero del computer usando la funzione con max=5;
let compNumber= randomInt(5);

//sommo i due numeri 
let sum = userNumb + compNumber ;
console.log(sum);

//funzione generica per capire se il parametro è pari o dispari 
function isEven(x) {
    if (x % 2 == 0) {
        return 'Pari';
    } else {
        return 'Dispari';
    }
}
console.log(isEven(sum));
//Chi vince?
if (userChoice == isEven(sum)) {
    console.log('Hai vinto!!');
} else {
    console.log('Hai perso!');
}