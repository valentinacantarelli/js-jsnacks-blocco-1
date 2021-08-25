//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var listaNumeriDispari = [];
var pariDispari;

for(var i=0; i < 6; i++){
    numeroUtente = parseInt(prompt("Inserisci un numero:"));
    if( numeroUtente % 2 == 0 ) {
        pariDispari = "pari";
    } else {
        pariDispari = "dispari";
        listaNumeriDispari.push(numeroUtente);
    }  
}

alert(listaNumeriDispari)


