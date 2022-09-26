/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var lun = 10, mar = 15, mer = 17, gio = 16, ven = 9, sab = 18, dom =20;
var hot = Math.max(lun, mar, mer, gio, ven, sab, dom);
var cold = Math.min(lun, mar, mer, gio, ven, sab, dom);
switch (hot) {
  case lun:
    console.log(`La giornata più calda è stata lunedì con ${lun} gradi`)
    break;
    case mar:
      console.log(`La giornata più calda è stata martedì con ${mar} gradi`)
    break;
    case mer:
      console.log(`La giornata più calda è stata mercoledì con ${mer} gradi`)
    break;
    case gio:
      console.log(`La giornata più calda è stata giovedì con ${gio} gradi`)
    break;
    case ven:
      console.log(`La giornata più calda è stata venerdì con ${ven} gradi`)
    break;
    case sab:
      console.log(`La giornata più calda è stata sabato con ${sab} gradi`)
    break;
    case dom:
      console.log(`La giornata più calda è stata domenica con ${dom} gradi`)
};
switch (cold) {
  case lun:
    console.log(`La giornata più fredda è stata lunedì con ${lun} gradi`)
    break;
    case mar:
      console.log(`La giornata più fredda è stata martedì con ${mar} gradi`)
    break;
    case mer:
      console.log(`La giornata più fredda è stata mercoledì con ${mer} gradi`)
    break;
    case gio:
      console.log(`La giornata più fredda è stata giovedì con ${gio} gradi`)
    break;
    case ven:
      console.log(`La giornata più fredda è stata venerdì con ${ven} gradi`)
    break;
    case sab:
      console.log(`La giornata più fredda è stata sabato con ${sab} gradi`)
    break;
    case dom:
      console.log(`La giornata più fredda è stata domenica con ${dom} gradi`)
};
