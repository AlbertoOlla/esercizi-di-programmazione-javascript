/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
console.log('1. Tiramisu');
console.log('2. Torta della Nonna');
console.log('3 Cheesecake alla nutella');
console.log('4. Macedonia');
var MENU = 2;
console.log(`La tua scelta è la numero ${MENU}`);
switch (MENU) {
  case 1:
    console.log('Hai scelto il Tiramisu');
    break;
  case 2:
  console.log('Hai scelto la torta della nonna')
    break;
  case 3:
  console.log('Hai scelto il Cheesecake alla nutella')
    break;
  case 4:
  console.log('Hai scelto la Macedonia');
    break;
  default:
  console.log('Dolce non disponibile');
};
