var OperazioneUtente = /** @class */ (function () {
    function OperazioneUtente(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    OperazioneUtente.prototype.ricarica = function (importoCaricato) {
        return this.credito + importoCaricato;
    };
    ;
    OperazioneUtente.prototype.chiamata = function (tempoChiamata) {
        return tempoChiamata;
    };
    ;
    OperazioneUtente.prototype.numero404 = function (creditoDisponibile) {
        return creditoDisponibile;
    };
    ;
    OperazioneUtente.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ;
    OperazioneUtente.prototype.azzeraChiamate = function () {
        return 0;
    };
    return OperazioneUtente;
}());
var costoChiamata = .20;
var utente1 = new OperazioneUtente(10, 1);
var ricarica = utente1.ricarica(5);
var minuti = utente1.numero404(4);
var numeroChiamate = utente1.numeroChiamate;
console.log(' ');
console.log('Primo Utente:');
console.log('------------------------------------------------------');
console.log("Credito telefonico ".concat(utente1.credito, "\u20AC")); //
console.log("Credito dopo la ricarica: ".concat(ricarica, " \u20AC")); //
console.log("Durata chiamata: ".concat(minuti, " minuti"));
console.log("Credito residuo: ".concat(ricarica - ((minuti * costoChiamata) * numeroChiamate), " \u20AC"));
console.log("Chiamate effettuate ".concat(numeroChiamate));
console.log("Chiamate azzerate ".concat(utente1.azzeraChiamate()));
console.log(' ');
var utente2 = new OperazioneUtente(25, 1);
var ricarica = utente2.ricarica(15);
var minuti2 = utente2.numero404(6);
var numeroChiamate2 = utente2.numeroChiamate;
console.log('Secondo Utente:');
console.log('------------------------------------------------------');
console.log("Credito telefonico ".concat(utente2.credito, "\u20AC"));
console.log("Credito dopo la ricarica: ".concat(ricarica, " \u20AC"));
console.log("Durata chiamata: ".concat(minuti2, " minuti"));
console.log("Credito residuo: ".concat(ricarica - ((minuti2 * costoChiamata) * numeroChiamate2), " \u20AC"));
console.log("Chiamate effettuate ".concat(numeroChiamate2));
console.log("Chiamate azzerate ".concat(utente2.azzeraChiamate()));
console.log(' ');
var utente3 = new OperazioneUtente(18, 8);
var ricarica = utente3.ricarica(20);
var minuti3 = utente3.numero404(5);
var numeroChiamate3 = utente3.numeroChiamate;
console.log('Terzo Utente:');
console.log('------------------------------------------------------');
console.log("Credito telefonico ".concat(utente3.credito, "\u20AC"));
console.log("Credito dopo la ricarica: ".concat(ricarica, " \u20AC"));
console.log("Durata chiamata: ".concat(minuti3, " minuti"));
console.log("Credito residuo: ".concat(ricarica - ((minuti3 * costoChiamata) * numeroChiamate3), " \u20AC"));
console.log("Chiamate effettuate ".concat(numeroChiamate3));
console.log("Chiamate azzerate ".concat(utente3.azzeraChiamate()));
console.log(' ');
