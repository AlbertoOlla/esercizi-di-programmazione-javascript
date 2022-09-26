/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
ar player1 = 25;
var player2 = 44;
var random = Math.floor(Math.random() * (100-1)+1);
console.log(`Player 1: ${player1}`);
console.log(`Player 2: ${player2}`);
console.log(`Random: ${random}`);
var risultato1 = Math.abs(random-player1)
var risultato2 = Math.abs(random-player2)
if (player1==random) {
  console.log('il player 1 ha azzeccato il numero');
} else if (player2==random) {
  console.log('il player 2 ha azzeccato il numero');
} else if (risultato1<risultato2) {
  console.log('il player 1 è arrivato più vicino al numero')
}else {
  console.log('il player 2 è arrivato più vicino al numero');
};
