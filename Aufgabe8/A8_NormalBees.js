/*
Aufgabe:    Aufgabe 8
Name:       Alisia Steiner
Matrikel:   254788
Datum:      18.05.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
/* NormalBee is not a constructor als Error-Meldung in der Console. Fehler nicht gefunden :( Vorher wurden zumindest die Blumen gezeichnet - das funktioniert nun auch nicht mehr */
var Aufgabe8;
(function (Aufgabe8) {
    class NormalBees extends Aufgabe8.Bees {
        constructor() {
            super();
            this.setStartPosition();
            this.setRandomColors();
            this.draw(this.x, this.y);
        }
        draw(_x, _y) {
            /*Flügel 1*/
            Aufgabe8.crc2.beginPath();
            //        crc2.ellipse(_x, _y - 5, 2, 4, 45 * Math.PI/-150, Math.PI * 2, 0);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = this.wingcolor;
            Aufgabe8.crc2.fill();
            /*Stachel*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(_x + 5, _y - 1);
            Aufgabe8.crc2.lineTo(_x + 10, _y + 0.5);
            Aufgabe8.crc2.lineTo(_x + 5, _y + 2);
            Aufgabe8.crc2.lineTo(_x + 5, _y);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "black";
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.stroke();
            /*Körper*/
            Aufgabe8.crc2.beginPath();
            moveTo(_x, _y);
            //   crc2.ellipse(_x, _y, 6, 4, 0, Math.PI * 2, 0); 
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = this.bodycolor;
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.strokeStyle = "black";
            Aufgabe8.crc2.stroke();
            /*Flügel 2*/
            Aufgabe8.crc2.beginPath();
            //        crc2.ellipse(_x + 2, _y - 5, 2, 4, 45 * Math.PI/180, Math.PI * 2, 0);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = this.wingcolor;
            Aufgabe8.crc2.fill();
        }
        setStartPosition() {
            this.x = 665;
            this.y = 345;
        }
        setRandomColors() {
            this.bodycolor = "hsl(" + Math.random() * 70 + ", 100%, 50%)";
            this.wingcolor = "hsl(" + Math.random() * 150 + 150 + ", 100%, 60%)";
        }
        move() {
            this.x += Math.random() * 5 - 3;
            this.y += Math.random() * 3.8 - 2;
        }
    }
    Aufgabe8.NormalBees = NormalBees;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=A8_NormalBees.js.map