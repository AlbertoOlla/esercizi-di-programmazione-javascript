/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var anno_corrente = 2022
var anno_nascita = 1980
var età = anno_corrente - anno_nascita
var quota_100 = 100 - età
console.log(`età della persona ${età} e ne mancano ${quota_100} per raggiungere i 100 anni`);
