/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
var a=prompt('inserisci un numero dispari');

if(a%2==0){console.log('NUMERO DISPARI!')};
if(isNaN(a)){console.log('no number')};

if(a%2!==0){

var r=['    X     ','   XXX   ','  XXXXX  ','   XXX   ','    X     '];
var tot=r.length;
var cont=0;

while(cont<tot){console.log(r[cont]);
cont++;
};
};

