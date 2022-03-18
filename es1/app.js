/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//chiedo parola all'utente

let word = prompt('Inserisci qui la prima parola che ti viene in mente');

/*
creo funzione generica per invertire la parola data
*/

function wordReverse(x) {
    //prendo la parola dal prompt
    x = word;
    //divido ogni lettera della parola in un elemento di un array
    xSplit = x.split("");
    console.log(xSplit);
    //inverto l'ordine delle singole lettere
    xReverse= xSplit.reverse();
    console.log(xReverse);
    //riunisco le parole in un solo elemento
    y=xReverse.join("");
    return y
}

//controllo, usando la funzione, se la parola e il suo inverso sono uguali
if (wordReverse(word) == word ) {
    console.log('La parola che hai inserito è palindroma!!!')
} else {
    console.log('Mi dispiace, la parola che hai inserito non è palindroma')
}