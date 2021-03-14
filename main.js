// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

do {
  var difficolta = (prompt("Con quale difficoltà vuoi giocare? Facile -> f Medio -> m Difficile -> d").toLowerCase());
} while (difficolta !== "f" && difficolta !== "m" && difficolta !== "d");

var totaleNumeri = 0

switch (difficolta) {
  case "f":
      totaleNumeri = 100;
    break;
  case "m":
      totaleNumeri = 80;
    break;
  case "d":
      totaleNumeri = 50;
    break;
}

var numeriBombe = [];
var numeriSafe = [];
var numeroUtente = 0;
var totaleBombe = 16;
var numeroRandom = 0;
var i = 0;

while (i < totaleBombe) {
  numeroRandom = getRandom(1, totaleNumeri);
   if (numeriBombe.includes(numeroRandom)) {
   } else {
  numeriBombe.push(numeroRandom);
  i++;
  }
}
console.log(numeriBombe);

flag = false;

while (numeriSafe.length < totaleNumeri - totaleBombe && flag == false) {
  numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e " + totaleNumeri + ":"))
  if (numeriSafe.includes(numeroUtente)) {
    alert("Hai già inserito questo numero!");
  } else if (numeroUtente <= 0 || numeroUtente > totaleNumeri || isNaN(numeroUtente)) {
    alert("Inserisci solo un numero tra 1 e 100!");
  } else if (numeriBombe.includes(numeroUtente)) {
    alert("Boom! Sei esploso!");
    alert("il numero " + numeroUtente + " era una bomba!" )
    flag = true;
  } else {
    numeriSafe.push(numeroUtente);
    console.log("Hai inserito il numero: " + numeroUtente);
  }
}

var punteggio = numeriSafe.length;

alert("Hai totalizzato: " + punteggio + "!");

// FUNCTIONS
function getRandom(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
