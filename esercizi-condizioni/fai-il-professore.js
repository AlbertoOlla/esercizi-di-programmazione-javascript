/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/
var voto=prompt();
var giudizio='';
if(voto<=17){voto='g'};
if(voto>=18, voto<21){voto='a'};
if(voto>=21, voto<24){voto='b'};
if(voto>=24, voto<27){voto='c'};
if(voto>=27, voto<29){voto='d'};
if(voto>=30, voto<31){voto='e'};
if(voto>=31){voto='f'};


switch(voto){
  case 'g':
  giudizio='bocciato ';
  break;
  case 'a':
  giudizio='sufficiente';
  break;
  case 'b':
  giudizio='buono';
  break;
  case 'c':
  giudizio='distinto';
  break;
  case 'd':
  giudizio='ottimo';
  break;
  case 'e':
  giudizio='eccellente';
  break;
  case 'f':
  giudizio='ma va ';
  break;
  
  }

console.log(giudizio);
