/*
Aufgabe:    Aufgabe 8
Name:       Alisia Steiner
Matrikel:   254788
Datum:      18.05.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8;
(function (Aufgabe8) {
    class SpecialBees extends Aufgabe8.Bees {
        constructor() {
            super();
            console.log("Hallo, ich bin eine Biene!");
        }
        setStartPosition() {
            this.x = 665;
            this.y = 345;
        }
    }
    Aufgabe8.SpecialBees = SpecialBees;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=A8_SpecialBees.js.map