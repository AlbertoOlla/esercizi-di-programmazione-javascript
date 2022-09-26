/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var numero = Math.floor(Math.random() * (9999-1) +1);
var stringa = String(numero);
console.log(numero);
console.log(stringa.length);
if (stringa.length=1) {
  console.log(`${stringa.length} cifra`);
}else {
  console.log(`${stringa.length} cifre`);
};
