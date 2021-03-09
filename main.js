// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriBombe = [];
var numeriSafe = [];

while (numeriBombe.length < 16) {
  var numRandom = getRandom (1,100);
  if (!numeriBombe.includes(numRandom)) {
    numeriBombe.push(numRandom);
  }
}
console.log(numeriBombe);

while (numeriSafe.length < 2) {
  var numUtente = parseInt(prompt("Dammi un numero:"));
    if (isNaN(numUtente)) {
      console.log("Non è un numero");
    } else if (1 >= numUtente || numUtente >= 100) {
      console.log("Il numero non è tra 1 e 100");
    } else {
      if (!numeriBombe.includes(numUtente) && !numeriSafe.includes(numUtente)) {
        numeriSafe.push(numUtente);
      } else {
        console.log("in numero esiste già");
      }
    }
}

for (var i = 0; i < numeriSafe.length; i++) {
  console.log(numeriSafe[i]);
}




// FUNCTIONS
function getRandom(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
