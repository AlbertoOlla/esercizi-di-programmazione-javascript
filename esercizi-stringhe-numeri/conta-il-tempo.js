/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
secondi = 12560;
hour = Math.floor(secondi / (60*60));
minutes = Math.floor((secondi - (hour * 3600)) / 60);
seconds = Math.floor((secondi - (hour * 3600))-(minutes*60));
console.log(`${hour} ore ${minutes} minuti ${seconds} secondi`);
