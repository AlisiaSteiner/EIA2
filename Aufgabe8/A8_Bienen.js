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
    class Bees {
        constructor() {
            console.log("Hallo, ich bin eine Biene!");
            this.draw();
        }
        updatePosition() {
            this.move();
            this.draw();
        }
        draw() { }
        move() {
        }
    }
    Aufgabe8.Bees = Bees;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=A8_Bienen.js.map