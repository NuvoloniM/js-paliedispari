//cosa deve fare il programma:

//seleziono pari o dispari
//scelgo un numero tra 1 e 5
//schiaccio play -> inizia il gioco 

//la funzione start deve registrare le scelte, sommare i numeri e dare il risultato

//variabili 
let compNumber = 0;
let userNumb = 0;

//target i btn in html
let btn1 = document.getElementById('btn_1');
let btn2 = document.getElementById('btn_2');
let btn3 = document.getElementById('btn_3');
let btn4 = document.getElementById('btn_4');
//target btn inizio gioco 
let btnGo = document.getElementById('btn_go');
let btnReload = document.getElementById('btn_reload');

//1. Seleziono Pari o Dispari
btn1.addEventListener("click", btnEven);
btn2.addEventListener("click",btnOdd);

//2.Schiaccio play -> inizo il gioco 
//funzione start game
btnGo.addEventListener("click",check);
//ricarica la pagina
btnReload.addEventListener("click", reload);



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

//registrare scelte, sommare numeri e dare risultato

function check() {
    //controllo se i dati sono tutti inseriti
    if (btn1.classList.contains('btn-success') && btn2.classList.contains('btn-outline-danger') || btn1.classList.contains('btn-outline-success') && btn2.classList.contains('btn-danger')) {
        //controllo user's number input 
        let val = document.querySelector('input').value;
        if (isNaN(val) == true || val < 1 || val > 5 ) {
        alert("Numero non valido");
        } else {
            userNumb = parseInt(val);
            document.getElementById('user_numb').innerHTML = `${userNumb}`;

            //controllo user choice
            if (btn1.classList.contains('btn-success') == true) {
                userChoice = 'Pari';
            } else {
                userChoice = 'Dispari';
            }
            console.log(userChoice);
            
            //estraggo comp number
            let compNumber= randomInt(1,5);
            document.getElementById('comp_numb').innerHTML = `${compNumber}`;
    
            //sommo i due numeri 
            let sum = userNumb + compNumber;
            document.getElementById('sum').innerHTML = `${sum}`;
            //Chi vince?
            if (userChoice == isEven(sum)) {
                document.getElementById('box_result').classList.add('bg_green'); 
                document.getElementById('result').innerHTML = `${isEven(sum)} : HAI VINTO!!!`;
            } else {
                document.getElementById('box_result').classList.add('bg_red'); 
                document.getElementById('result').innerHTML = `${isEven(sum)} : HAI PERSO!!!`;
            }
    
            //mostra i risultati in html
            document.getElementById('end_game').classList.toggle('d-none');
            //nascondi le scelte
            document.getElementById('user_choice').classList.toggle('d-none');
            document.getElementById('comp_choice').classList.toggle('d-none');
            }
            //scambia i bottoni
            btnGo.classList.toggle('d-none');
            btnReload.classList.toggle('d-none');

    } else {
        alert('Scegli pari o dispari');
    }
        
}

function reload() {
    svuota('input');
    history.go(0);
}

//funzione per scegliere un numero tra min e max

let x = 0;
function randomInt(min,max) {
    x = Math.floor(Math.random()*max + min);
    console.log(x);
    return x;
}

//funzione generica per capire se il parametro ?? pari o dispari 
function isEven(x) {
    if (x % 2 == 0) {
        return 'Pari';
    } else {
        return 'Dispari';
    }
}

//eliminare numero scelto che rimane in input
function svuota(x) {  
    return document.getElementById(x).value = "";
}