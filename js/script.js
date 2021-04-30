// 1. chiedi all'utente il cognome

var cognomeRichiesto = prompt("Ciao, qual'è il tuo cognome?");
console.log(cognomeRichiesto);

var listaCognomi = ["Flore", "Grassi", "Fanti", "Russo"];

var check = true;
// 2. Ordino i cognomi in ordine alfabetico controllando che i cognomi non siano più lunghi di 8 e più corti di 4 caratteri

listaCognomi = listaCognomi.sort();

if (cognomeRichiesto.length <= 8 && cognomeRichiesto.length >= 4) {
    listaCognomi.push(cognomeRichiesto);
    check = false;

}else if (cognomeRichiesto.length > 8) {
    console.log("Hai un cognome troppo lungo!");

}else if (cognomeRichiesto.length < 4) {
    console.log("Hai un cognome troppo corto!");
}

// 3. se le codizioni verificato nei check precedenti sono verificate, stampo la lista dei cognomi in ordine alfabetico e numerata
if (check != true) {
    var numerazione = 0;
    for (i = 0; i < listaCognomi.length; i++) {
        numerazione ++;
        console.log(numerazione + " " + listaCognomi[i]);
    }
}