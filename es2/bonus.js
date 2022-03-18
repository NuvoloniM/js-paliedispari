/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
//target i btn in html
let btn1 = document.getElementById('btn_1');
let btn2 = document.getElementById('btn_2');
let btn3 = document.getElementById('btn_3');
let btn4 = document.getElementById('btn_4');
let btnGo = document.getElementById('btn_go');

//chiamo le funzioni con gli eventi
btn1.addEventListener("click", btnEven);
btn2.addEventListener("click",btnOdd);
btnGo.addEventListener("click",check);




let userChoice = 0;
if (btn1.classList.contains('btn-success') == true) {
    userChoice = 'Pari';
} else {
    userChoice = 'Dispari';
}
console.log(userChoice);

// let userNumb = document.querySelector('input').value;
console.log(userNumb)

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



//funzioni
function btnEven() {
    btn1.classList.replace("btn-outline-success","btn-success");
    btn2.classList.replace("btn-danger", "btn-outline-danger");
    btn3.classList.replace("btn-success", "btn-outline-success");
    btn4.classList.replace("btn-outline-danger", "btn-danger");

}

function btnOdd() {
    btn1.classList.replace("btn-success", "btn-outline-success");
    btn2.classList.replace("btn-outline-danger", "btn-danger");
    btn3.classList.replace("btn-outline-success","btn-success");
    btn4.classList.replace("btn-danger", "btn-outline-danger");
}

//controll se il numero inserito va bene e controlla il btn scelto.
function check() {
    let val = document.querySelector('input').value;
    if (isNaN(val) == true || val < 1 || val > 5 ) {
       alert("Numero non valido");
    } else {
        userNumb = document.querySelector('input').value;
    }

    if (btn1.classList.contains('btn-success') == true) {
    userChoice = 'Pari';
    } else {
    userChoice = 'Dispari';
    }
    console.log(userChoice);
    
  }
