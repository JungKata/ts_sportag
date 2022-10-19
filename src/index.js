"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_golegyik, _Football_golmasik, _CalvinBall_winner;
class Football {
    constructor(winner, date, golegyik, golmasik) {
        _Football_golegyik.set(this, void 0);
        _Football_golmasik.set(this, void 0);
        __classPrivateFieldSet(this, _Football_golegyik, golegyik, "f");
        __classPrivateFieldSet(this, _Football_golmasik, golmasik, "f");
        this.winner = winner;
        this.date = date;
    }
    result() {
        return "Football match: " + __classPrivateFieldGet(this, _Football_golegyik, "f") + "-" + __classPrivateFieldGet(this, _Football_golmasik, "f");
    }
    kiir() {
        console.log(this.result());
    }
}
_Football_golegyik = new WeakMap(), _Football_golmasik = new WeakMap();
class Maraton {
    constructor(winner, date, ido) {
        this.winner = winner;
        this.ido = ido;
        this.date = date;
    }
    result() {
        let perc = Math.floor(this.ido / 60);
        let masodperc = this.ido % 60;
        return "Maraton: " + perc + " min " + masodperc + "s ";
    }
    kiir() {
        console.log(this.result());
    }
}
class CalvinBall {
    constructor(winner, date) {
        _CalvinBall_winner.set(this, void 0);
        __classPrivateFieldSet(this, _CalvinBall_winner, winner, "f");
        this.date = date;
    }
    set winner(value) {
        if (value == "Calvin" || value == "Hobbes") {
            this.winner = this.winner;
        }
    }
    result() {
        let random = Math.floor(Math.random() * 100) + 1;
        return "Calvinball: " + random + " points";
    }
    kiir() {
        console.log(this.result());
    }
}
_CalvinBall_winner = new WeakMap();
let sportok = [
    new Football("realmadrid", new Date("2018-05-23"), 3, 1),
    new Football("PSG", new Date("2015-08-07"), 4, 2),
    new Maraton("Ábel", new Date("2006-10-16"), 14556),
    new Maraton("Ábel", new Date("2022-10-19"), 2045),
    new CalvinBall("valaki", new Date("2020-12-24")),
    new CalvinBall("valaki2", new Date("2019-03-25")),
];
for (let sport of sportok) {
    sport.kiir();
}
