/*
Aufgabe:    Semesteraufgabe
Name:       Alisia Steiner
Matrikel:   254788
Datum:      21.07.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var SpookySpook;
(function (SpookySpook) {
    class AngryGhost extends SpookySpook.Ghost {
        constructor() {
            super();
            console.log("Oh no - an angry ghost!!");
            this.randomSize();
            this.randomPosition();
            this.drawGhost();
        }
        randomSize() {
            this.height = ((Math.random() * 30) + 10);
            this.width = ((Math.random() * 20) + 15);
        }
        randomPosition() {
            this.x = ((Math.random() * 780) + 10);
            this.y = ((Math.random() * 475));
        }
        drawGhost() {
            /* Ghost Body */
            SpookySpook.crc2.fillStyle = "#808080";
            SpookySpook.crc2.strokeStyle = "black";
            SpookySpook.crc2.shadowBlur = 30;
            SpookySpook.crc2.shadowColor = "yellow";
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.moveTo(this.x, this.y);
            SpookySpook.crc2.bezierCurveTo(this.x, this.y - this.height, this.x + this.width, this.y - this.height, this.x + this.width, this.y);
            SpookySpook.crc2.lineTo(this.x + this.width, this.y + (2 * this.height));
            SpookySpook.crc2.arc(this.x + this.width - (0.1 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, false);
            SpookySpook.crc2.arc((this.x + this.width) - (0.3 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, true);
            SpookySpook.crc2.arc(this.x + this.width - (0.5 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, false);
            SpookySpook.crc2.arc((this.x + this.width) - (0.7 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, true);
            SpookySpook.crc2.arc(this.x + this.width - (0.9 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, false);
            SpookySpook.crc2.globalAlpha = 0.9;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
            SpookySpook.crc2.fill();
            /* Ghost-Eyes */
            SpookySpook.crc2.fillStyle = "#ff3300";
            SpookySpook.crc2.strokeStyle = "#ff3300";
            SpookySpook.crc2.shadowBlur = 0;
            SpookySpook.crc2.globalAlpha = 1;
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(this.x + (0.3 * this.width), this.y - 0.1 * this.height, (0.1 * this.width), 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.stroke();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(this.x + (0.7 * this.width), this.y - 0.1 * this.height, (0.1 * this.width), 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.stroke();
        }
        update() {
        }
        move() {
        }
        disappear() {
        }
    }
    SpookySpook.AngryGhost = AngryGhost;
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=AngryGhost.js.map