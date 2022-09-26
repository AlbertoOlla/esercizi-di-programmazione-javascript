/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/
var gatti_in_fila = 6;
var totale_gatti = 44;
var file_totali = Math.ceil(totale_gatti/gatti_in_fila);
var gatti_mancanti = file_totali*gatti_in_fila-totale_gatti;
console.log(file_totali);
console.log(gatti_mancanti);
console.log(`${totale_gatti} gatti in fila per ${gatti_in_fila} con il resto di ${totale_gatti%gatti_in_fila} ne mancano ${gatti_mancanti} per completare la fila`);
