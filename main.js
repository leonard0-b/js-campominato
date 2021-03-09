// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriBombe = [];
var numeriSafe = [];

for (var i = 0; i < 16; i++) {
  var numRandom = getRandom (1,100);
  while (numeriBombe.includes(numRandom)) {
    numRandom = getRandom (1,100);
  }
  numeriBombe.push(numRandom);
}

console.log(numeriBombe);

while (numeriSafe.length < (100 - 16) && !numeriBombe.includes(numUtente)) {
  var numUtente = parseInt(prompt("Dammi un numero da 1 a 100: "));
  while (isNaN(numUtente) || numUtente >= 100 || numUtente < 1) {
    var nomUtente = parseInt(prompt("Puoi inserire soltanto numeri che siano compresi tra 1 e 100"));
  }
  while (numeriSafe.includes(numUtente)) {
    var nomUtente = parseInt(prompt("Hai già inserito questo numero!"))
  }
  numeriSafe.push(numUtente);
}
console.log(numeriSafe);






// FUNCTIONS
function getRandom(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
