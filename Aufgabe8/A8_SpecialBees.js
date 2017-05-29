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
        constructor(_x, _y) {
            super();
            console.log("Ich bin aber speziell");
            this.x = _x;
            this.y = _y;
            this.setStartPosition();
            this.setTargetPosition();
            this.draw();
        }
        setStartPosition() {
            this.x = 665;
            this.y = 345;
        }
        setTargetPosition() {
            let targetflower = Math.round(Math.random() * (Aufgabe8.blumen.length - 1));
            this.xTarget = Aufgabe8.blumen[targetflower].x;
            this.yTarget = Aufgabe8.blumen[targetflower].y;
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.setTargetPosition();
            }
            else {
                this.x += xDiff * 0.04;
                this.y += yDiff * 0.04;
            }
        }
        draw() {
            /*Flügel 1*/
            Aufgabe8.crc2.beginPath();
            //        crc2.ellipse(this.x, this.y - 5, 2, 4, 45 * Math.PI/-150, Math.PI * 2, 0);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = this.wingcolor;
            Aufgabe8.crc2.fill();
            /*Stachel*/
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.moveTo(this.x + 5, this.y - 1);
            Aufgabe8.crc2.lineTo(this.x + 10, this.y + 0.5);
            Aufgabe8.crc2.lineTo(this.x + 5, this.y + 2);
            Aufgabe8.crc2.lineTo(this.x + 5, this.y);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = "black";
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.stroke();
            /*Körper*/
            Aufgabe8.crc2.beginPath();
            moveTo(this.x, this.y);
            //   crc2.ellipse(this.x, this.y, 6, 4, 0, Math.PI * 2, 0); 
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = this.bodycolor;
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.strokeStyle = "black";
            Aufgabe8.crc2.stroke();
            /*Flügel 2*/
            Aufgabe8.crc2.beginPath();
            //        crc2.ellipse(this.x + 2, this.y - 5, 2, 4, 45 * Math.PI/180, Math.PI * 2, 0);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = this.wingcolor;
            Aufgabe8.crc2.fill();
        }
    }
    Aufgabe8.SpecialBees = SpecialBees;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=A8_SpecialBees.js.map