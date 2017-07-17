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
    class BackgroundDay {
        constructor() {
            this.drawSky();
            this.drawSun();
            this.drawGround();
            this.drawCloud(550, 60);
            this.drawCloud(180, 90);
            this.drawGrave1();
        }
        drawSky() {
            SpookySpook.crc2.beginPath();
            let gradient = SpookySpook.crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, "#80aaff");
            gradient.addColorStop(1, "white");
            SpookySpook.crc2.fillStyle = gradient;
            SpookySpook.crc2.fillRect(0, 0, SpookySpook.crc2.canvas.width, 450);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
        }
        drawGround() {
            SpookySpook.crc2.beginPath();
            let gradient = SpookySpook.crc2.createLinearGradient(0, 450, 0, 500);
            gradient.addColorStop(0, "#cc9966");
            gradient.addColorStop(1, "#805500");
            SpookySpook.crc2.fillStyle = gradient;
            SpookySpook.crc2.fillRect(0, 450, SpookySpook.crc2.canvas.width, 50);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
        }
        drawSun() {
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(700, 80, 50, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            let gradient = SpookySpook.crc2.createRadialGradient(700, 80, 10, 700, 80, 100);
            gradient.addColorStop(0, "#ffff00");
            gradient.addColorStop(1, "white");
            SpookySpook.crc2.fillStyle = gradient;
            SpookySpook.crc2.fill();
        }
        drawCloud(x, y) {
            SpookySpook.crc2.fillStyle = "#f9f9f9";
            SpookySpook.crc2.strokeStyle = "#f9f9f9";
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.moveTo(x, y);
            SpookySpook.crc2.arc(x, y - 5, 20, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x + 5, y + 20, 20, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x + 30, y + 20, 25, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x + 30, y - 20, 25, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x + 54, y - 10, 20, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x + 58, y + 16, 20, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
        }
        drawGrave1() {
            SpookySpook.crc2.fillStyle = "#804000";
            SpookySpook.crc2.strokeStyle = "black";
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.moveTo(60, 490);
            SpookySpook.crc2.arc(60, 490, 30, 1 * Math.PI, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.stroke();
        }
    }
    SpookySpook.BackgroundDay = BackgroundDay;
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=BackgroundDay.js.map