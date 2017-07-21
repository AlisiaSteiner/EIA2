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
            this.drawFlower(120, 470, "#990000", "#ffff66");
            this.drawFlower(89, 478, "white", "#000099");
            this.drawGrave2();
            this.drawFlower(680, 458, "#ff9900", "#ffff99");
            this.drawFlower(705, 480, "Yellow", "#cc9900");
            this.drawFlower(725, 464, "#6699ff", "#ffccff");
        }
        drawSky() {
            SpookySpook.crc2.beginPath();
            let gradient = SpookySpook.crc2.createLinearGradient(0, 0, 0, 550);
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
            SpookySpook.crc2.globalAlpha = 1;
        }
        /* "Normal" Gravestone */
        drawGrave1() {
            /*Gravestone*/
            let gradient = SpookySpook.crc2.createLinearGradient(0, 250, 0, 520);
            gradient.addColorStop(0, "#a6a6a6");
            gradient.addColorStop(1, "#262626");
            SpookySpook.crc2.fillStyle = gradient;
            SpookySpook.crc2.strokeStyle = "#262626";
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.moveTo(65, 492);
            SpookySpook.crc2.lineTo(45, 352);
            SpookySpook.crc2.lineTo(145, 342);
            SpookySpook.crc2.lineTo(165, 484);
            SpookySpook.crc2.globalAlpha = 1;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
            SpookySpook.crc2.fill();
            /* Text on the Gravestone */
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.fillStyle = "black";
            SpookySpook.crc2.moveTo(55, 365);
            SpookySpook.crc2.lineTo(133, 357);
            SpookySpook.crc2.lineTo(135, 367);
            SpookySpook.crc2.lineTo(57, 375);
            SpookySpook.crc2.globalAlpha = 0.2;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.fillStyle = "black";
            SpookySpook.crc2.moveTo(59, 385);
            SpookySpook.crc2.lineTo(137, 377);
            SpookySpook.crc2.lineTo(139, 387);
            SpookySpook.crc2.lineTo(61, 395);
            SpookySpook.crc2.globalAlpha = 0.2;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.fillStyle = "black";
            SpookySpook.crc2.moveTo(62, 405);
            SpookySpook.crc2.lineTo(141, 397);
            SpookySpook.crc2.lineTo(143, 407);
            SpookySpook.crc2.lineTo(64, 415);
            SpookySpook.crc2.globalAlpha = 0.2;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.fillStyle = "black";
            SpookySpook.crc2.moveTo(65, 425);
            SpookySpook.crc2.lineTo(145, 417);
            SpookySpook.crc2.lineTo(147, 427);
            SpookySpook.crc2.lineTo(67, 435);
            SpookySpook.crc2.globalAlpha = 0.2;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
            SpookySpook.crc2.fill();
            /* Earth */
            SpookySpook.crc2.fillStyle = "#804000";
            SpookySpook.crc2.strokeStyle = "#4d2600";
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.moveTo(55, 495);
            SpookySpook.crc2.bezierCurveTo(85, 450, 150, 440, 180, 485);
            SpookySpook.crc2.globalAlpha = 0.95;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.stroke();
        }
        /* Cruzifix - Gravestone */
        drawGrave2() {
            /*Gravestone*/
            let gradient = SpookySpook.crc2.createLinearGradient(0, 250, 0, 520);
            gradient.addColorStop(0, "#a6a6a6");
            gradient.addColorStop(1, "#262626");
            SpookySpook.crc2.fillStyle = gradient;
            SpookySpook.crc2.strokeStyle = "#262626";
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.moveTo(731, 488);
            SpookySpook.crc2.lineTo(751, 346);
            SpookySpook.crc2.lineTo(791, 354);
            SpookySpook.crc2.lineTo(795, 326);
            SpookySpook.crc2.lineTo(756, 316);
            SpookySpook.crc2.lineTo(761, 270);
            SpookySpook.crc2.lineTo(726, 261);
            SpookySpook.crc2.lineTo(721, 310);
            SpookySpook.crc2.lineTo(681, 300);
            SpookySpook.crc2.lineTo(679, 334);
            SpookySpook.crc2.lineTo(716, 341);
            SpookySpook.crc2.lineTo(702, 483);
            SpookySpook.crc2.globalAlpha = 1;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
            SpookySpook.crc2.fill();
            /* Text on the Gravestone */
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.fillStyle = "black";
            SpookySpook.crc2.moveTo(688, 323);
            SpookySpook.crc2.lineTo(690, 313);
            SpookySpook.crc2.lineTo(780, 332);
            SpookySpook.crc2.lineTo(777, 342);
            SpookySpook.crc2.globalAlpha = 0.2;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.stroke();
            SpookySpook.crc2.fill();
            /* Earth */
            SpookySpook.crc2.fillStyle = "#804000";
            SpookySpook.crc2.strokeStyle = "#4d2600";
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.moveTo(765, 495);
            SpookySpook.crc2.bezierCurveTo(755, 450, 670, 440, 640, 485);
            SpookySpook.crc2.globalAlpha = 0.95;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.stroke();
        }
        drawFlower(x, y, blossomColor, circleColor) {
            /* Stalk*/
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.moveTo(x, y);
            SpookySpook.crc2.lineTo(x, y - 20);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.strokeStyle = "#008000";
            SpookySpook.crc2.stroke();
            /*Blossom*/
            SpookySpook.crc2.fillStyle = blossomColor;
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.moveTo(x, y - 20);
            SpookySpook.crc2.arc(x + 5, y - 18, 5, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x + 6, y - 22, 5, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x + 4, y - 25, 5, 0 * Math.PI, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x + 1, y - 26, 5, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x - 3, y - 25, 5, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x - 5, y - 22, 5, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x - 5, y - 20, 5, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x - 3, y - 18, 5, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.beginPath();
            /*Circle*/
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.arc(x, y - 20, 4, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fillStyle = circleColor;
            SpookySpook.crc2.fill();
        }
    }
    SpookySpook.BackgroundDay = BackgroundDay;
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=BackgroundDay.js.map