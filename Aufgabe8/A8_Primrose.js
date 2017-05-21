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
    class Primrose extends Aufgabe8.Blumen {
        constructor(_x, _y) {
            super();
            this.draw();
        }
        draw() {
            /* Stängel */
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x, this.y);
            Aufgabe8.crc2.lineTo(this.x, this.y - 20);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.strokeStyle = "#008000";
            Aufgabe8.crc2.stroke();
            /*Blüte */
            Aufgabe8.crc2.fillStyle = "#ff6600";
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x, this.y - 20);
            Aufgabe8.crc2.arc(this.x + 5, this.y - 18, 5, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x + 6, this.y - 22, 5, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x + 4, this.y - 25, 5, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x + 1, this.y - 26, 5, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x - 3, this.y - 25, 5, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x - 5, this.y - 22, 5, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x - 5, this.y - 20, 5, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x - 3, this.y - 18, 5, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            /*Kreis*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x, this.y - 20, 4, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffcc66";
            Aufgabe8.crc2.fill();
        }
    }
    Aufgabe8.Primrose = Primrose;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=A8_Primrose.js.map