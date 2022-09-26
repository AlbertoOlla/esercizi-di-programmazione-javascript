/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/
var num1 = 5, num2 = 8, num3 = 15, num4 = 6;
var maggiore = Math.max(num1, num2, num3, num4);
var minore = Math.min(num1, num2, num3, num4);
console.log(`il valore maggiore è ${maggiore}`);
console.log(`il valore minore è ${minore}`);
