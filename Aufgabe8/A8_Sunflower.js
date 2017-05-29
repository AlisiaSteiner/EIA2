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
    class Sunflower extends Aufgabe8.Blumen {
        constructor(_x, _y) {
            super();
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        draw() {
            /* Stängel */
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x, this.y);
            Aufgabe8.crc2.lineTo(this.x, this.y - 30);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.strokeStyle = "#008000";
            Aufgabe8.crc2.stroke();
            /*Blüte*/
            /*1*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x, this.y - 35);
            Aufgabe8.crc2.quadraticCurveTo(this.x + 2, this.y - 10, this.x + 20, this.y - 15);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x + 20, this.y - 15);
            Aufgabe8.crc2.quadraticCurveTo(this.x + 18, this.y - 40, this.x, this.y - 35);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            /*2*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x, this.y - 35);
            Aufgabe8.crc2.quadraticCurveTo(this.x + 10, this.y - 20, this.x + 25, this.y - 40);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x + 25, this.y - 40);
            Aufgabe8.crc2.quadraticCurveTo(this.x + 10, this.y - 55, this.x, this.y - 35);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            /*3*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x, this.y - 35);
            Aufgabe8.crc2.quadraticCurveTo(this.x + 16, this.y - 45, this.x + 2, this.y - 60);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x + 2, this.y - 60);
            Aufgabe8.crc2.quadraticCurveTo(this.x - 14, this.y - 45, this.x, this.y - 35);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "##e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            /*4*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x, this.y - 35);
            Aufgabe8.crc2.quadraticCurveTo(this.x - 10, this.y - 20, this.x - 25, this.y - 40);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x - 25, this.y - 40);
            Aufgabe8.crc2.quadraticCurveTo(this.x - 10, this.y - 55, this.x, this.y - 35);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            /*5*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x, this.y - 35);
            Aufgabe8.crc2.quadraticCurveTo(this.x - 2, this.y - 10, this.x - 20, this.y - 15);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x - 20, this.y - 15);
            Aufgabe8.crc2.quadraticCurveTo(this.x - 18, this.y - 40, this.x, this.y - 35);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            /*6*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x, this.y - 35);
            Aufgabe8.crc2.quadraticCurveTo(this.x + 16, this.y - 30, this.x + 2, this.y - 10);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x + 2, this.y - 10);
            Aufgabe8.crc2.quadraticCurveTo(this.x - 14, this.y - 30, this.x, this.y - 35);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#ffff00";
            Aufgabe8.crc2.strokeStyle = "#e6ac00";
            Aufgabe8.crc2.stroke();
            Aufgabe8.crc2.fill();
            /*Kreis*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x, this.y - 35, 8, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "#804000";
            Aufgabe8.crc2.fill();
        }
    }
    Aufgabe8.Sunflower = Sunflower;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=A8_Sunflower.js.map