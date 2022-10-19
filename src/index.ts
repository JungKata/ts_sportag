interface Result{
    winner : string;
    date : Date;
    

    result(): string;
    kiir() : void;

}

class Football implements Result{
    #golegyik : number;
    #golmasik : number;
    winner : string;
    date : Date;
    constructor(winner : string, date : Date, golegyik : number,golmasik : number ){
        this.#golegyik = golegyik;
        this.#golmasik = golmasik;
        this.winner = winner;
        this.date = date;
    }
    result(): string {
        return "Football match: " + this.#golegyik + "-" + this.#golmasik;
    }
    kiir(): void {
        console.log(this.result());
    }
    

}

class Maraton implements Result{
    winner: string;
    ido : number;
    date : Date

    constructor(winner : string,  date : Date, ido : number){
        this.winner = winner;
        this.ido = ido;
        this.date = date;
    }

    
    result(): string {
        let perc = Math.floor(this.ido / 60);
        let masodperc = this.ido % 60;
        return "Maraton: " + perc + " min " + masodperc + "s "; 
    }
    kiir(): void {
        console.log(this.result());
    }
}

class CalvinBall implements Result{
    #winner: string;
    date : Date;

    constructor(winner : string, date: Date){
        this.#winner = winner;
        this.date = date;
    }
    
      set winner(value : string){
          if(value == "Calvin" || value == "Hobbes"){
            this.winner = this.winner;
          }
    }
    result(): string {
       let random = Math.floor(Math.random()*100) +1;
       return  "Calvinball: " + random + " points" 
    }
    kiir(): void {
        console.log(this.result());
    }
}

let sportok : Result[] = [
    new Football("realmadrid", new Date("2018-05-23"), 3, 1),
    new Football("PSG", new Date("2015-08-07"), 4, 2),
    new Maraton("Ábel", new Date("2006-10-16"),14556),
    new Maraton("Ábel", new Date("2022-10-19"),2045),
    new CalvinBall("valaki", new Date("2020-12-24")),
    new CalvinBall("valaki2", new Date("2019-03-25")),
];

for(let sport of sportok){
    sport.kiir();
}