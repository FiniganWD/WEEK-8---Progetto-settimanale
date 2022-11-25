interface Utente {
    credito: number;
    numeroChiamate: number;

    ricarica(importoCaricato:number): void;
    chiamata(tempoChiamata:number): void;
    numero404(creditoDisponibile:number):number;
    getNumeroChiamate():number;
    azzeraChiamate():number;

}

class OperazioneUtente implements Utente {
    public credito: number;
    public numeroChiamate: number;
    constructor(_credito:number, _numeroChiamate:number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
        ricarica(importoCaricato:number) {
        return this.credito + importoCaricato;
    };
        chiamata(tempoChiamata:number) {
        return tempoChiamata;
    };
        numero404(creditoDisponibile:number)  {
        return creditoDisponibile;
    };
        getNumeroChiamate()  {
        return this.numeroChiamate;
    };
        azzeraChiamate()  {
        return 0;
    }

}

let costoChiamata = .20;

let utente1 = new OperazioneUtente(10, 1);
var ricarica:any = utente1.ricarica(5)
var minuti:any = utente1.numero404(4)
var numeroChiamate = utente1.numeroChiamate;
console.log(' ')
console.log('Primo Utente:')
console.log('------------------------------------------------------')
console.log(`Credito telefonico ${utente1.credito}€`);  //
console.log(`Credito dopo la ricarica: ${ricarica} €`); //
console.log(`Durata chiamata: ${minuti} minuti`);
console.log(`Credito residuo: ${ricarica - ((minuti * costoChiamata) * numeroChiamate)} €`);
console.log(`Chiamate effettuate ${numeroChiamate}`);
console.log(`Chiamate azzerate ${utente1.azzeraChiamate()}`);
console.log(' ')


let utente2 = new OperazioneUtente(25, 1);
var ricarica:any = utente2.ricarica(15)
var minuti2:any = utente2.numero404(6);
var numeroChiamate2 = utente2.numeroChiamate;
console.log('Secondo Utente:')
console.log('------------------------------------------------------')
console.log(`Credito telefonico ${utente2.credito}€`);
console.log(`Credito dopo la ricarica: ${ricarica} €`);
console.log(`Durata chiamata: ${minuti2} minuti`);
console.log(`Credito residuo: ${ricarica - ((minuti2 * costoChiamata) * numeroChiamate2)} €`);
console.log(`Chiamate effettuate ${numeroChiamate2}`);
console.log(`Chiamate azzerate ${utente2.azzeraChiamate()}`);
console.log(' ')


let utente3 = new OperazioneUtente(18, 8);
var ricarica:any = utente3.ricarica(20)
var minuti3:any = utente3.numero404(5);
var numeroChiamate3 = utente3.numeroChiamate;
console.log('Terzo Utente:')
console.log('------------------------------------------------------')
console.log(`Credito telefonico ${utente3.credito}€`);
console.log(`Credito dopo la ricarica: ${ricarica} €`);
console.log(`Durata chiamata: ${minuti3} minuti`);
console.log(`Credito residuo: ${ricarica - ((minuti3 * costoChiamata) * numeroChiamate3)} €`);
console.log(`Chiamate effettuate ${numeroChiamate3}`);
console.log(`Chiamate azzerate ${utente3.azzeraChiamate()}`);
console.log(' ')