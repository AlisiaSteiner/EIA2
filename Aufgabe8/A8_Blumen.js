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
    class Blumen {
        constructor() {
            this.randomPosition();
            this.draw();
        }
        randomPosition() {
            this.x = Math.floor(Math.random() * 420 + 20);
            this.y = Math.floor(Math.random() * 250 + 260);
        }
        draw() { }
    }
    Aufgabe8.Blumen = Blumen;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=A8_Blumen.js.map