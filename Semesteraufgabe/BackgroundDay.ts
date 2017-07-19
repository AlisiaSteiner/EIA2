/*
Aufgabe:    Semesteraufgabe
Name:       Alisia Steiner
Matrikel:   254788
Datum:      21.07.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace SpookySpook {

    export class BackgroundDay {

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


        drawSky(): void {
            crc2.beginPath();
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 550);
            gradient.addColorStop(0, "#80aaff");
            gradient.addColorStop(1, "white");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, 450);
            crc2.closePath();
            crc2.stroke();
        }

        drawGround(): void {

            crc2.beginPath();
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 450, 0, 500);
            gradient.addColorStop(0, "#cc9966");
            gradient.addColorStop(1, "#805500");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 450, crc2.canvas.width, 50);
            crc2.closePath();
            crc2.stroke();
        }



        drawSun(): void {

            crc2.beginPath();
            crc2.arc(700, 80, 50, 0, 2 * Math.PI);
            crc2.closePath();
            let gradient: CanvasGradient = crc2.createRadialGradient(700, 80, 10, 700, 80, 100);
            gradient.addColorStop(0, "#ffff00");
            gradient.addColorStop(1, "white");
            crc2.fillStyle = gradient;
            crc2.fill();


        }

        drawCloud(x: number, y: number): void {

            crc2.fillStyle = "#f9f9f9";
            crc2.strokeStyle = "#f9f9f9";
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.arc(x, y - 5, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 5, y + 20, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 30, y + 20, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 30, y - 20, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 54, y - 10, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 58, y + 16, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

        }

        /* "Normal" Gravestone */

        drawGrave1(): void {


            /*Gravestone*/

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 250, 0, 520);
            gradient.addColorStop(0, "#a6a6a6");
            gradient.addColorStop(1, "#262626");
            crc2.fillStyle = gradient;
            crc2.strokeStyle = "#262626";
            crc2.beginPath();
            crc2.moveTo(65, 492);
            crc2.lineTo(45, 352);
            crc2.lineTo(145, 342);
            crc2.lineTo(165, 484);
            crc2.globalAlpha = 1;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            /* Text on the Gravestone */

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(55, 365);
            crc2.lineTo(133, 357);
            crc2.lineTo(135, 367);
            crc2.lineTo(57, 375);
            crc2.globalAlpha = 0.2;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(59, 385);
            crc2.lineTo(137, 377);
            crc2.lineTo(139, 387);
            crc2.lineTo(61, 395);
            crc2.globalAlpha = 0.2;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(62, 405);
            crc2.lineTo(141, 397);
            crc2.lineTo(143, 407);
            crc2.lineTo(64, 415);
            crc2.globalAlpha = 0.2;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(65, 425);
            crc2.lineTo(145, 417);
            crc2.lineTo(147, 427);
            crc2.lineTo(67, 435);
            crc2.globalAlpha = 0.2;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            /* Earth */

            crc2.fillStyle = "#804000";
            crc2.strokeStyle = "#4d2600";
            crc2.beginPath();
            crc2.moveTo(55, 495);
            crc2.bezierCurveTo(85, 450, 150, 440, 180, 485);
            crc2.globalAlpha = 0.95;
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }


        /* Cruzifix - Gravestone */
        drawGrave2(): void {


            /*Gravestone*/

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 250, 0, 520);
            gradient.addColorStop(0, "#a6a6a6");
            gradient.addColorStop(1, "#262626");
            crc2.fillStyle = gradient;
            crc2.strokeStyle = "#262626";
            crc2.beginPath();
            crc2.moveTo(731, 488);
            crc2.lineTo(751, 346);
            crc2.lineTo(791, 354);
            crc2.lineTo(795, 326);
            crc2.lineTo(756, 316);
            crc2.lineTo(761, 270);
            crc2.lineTo(726, 261);
            crc2.lineTo(721, 310);
            crc2.lineTo(681, 300);
            crc2.lineTo(679, 334);
            crc2.lineTo(716, 341);
            crc2.lineTo(702, 483);
            crc2.globalAlpha = 1;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            /* Text on the Gravestone */

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(688, 323);
            crc2.lineTo(690, 313);
            crc2.lineTo(780, 332);
            crc2.lineTo(777, 342);
            crc2.globalAlpha = 0.2;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


            /* Earth */

            crc2.fillStyle = "#804000";
            crc2.strokeStyle = "#4d2600";
            crc2.beginPath();
            crc2.moveTo(765, 495);
            crc2.bezierCurveTo(755, 450, 670, 440, 640, 485);
            crc2.globalAlpha = 0.95;
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }


        drawFlower(x: number, y: number, blossomColor: string, circleColor: string): void {

            /* Stalk*/

            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x, y - 20);
            crc2.closePath();
            crc2.strokeStyle = "#008000";
            crc2.stroke();

            /*Blossom*/

            crc2.fillStyle = blossomColor;
            crc2.beginPath();
            crc2.moveTo(x, y - 20);
            crc2.arc(x + 5, y - 18, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 6, y - 22, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 4, y - 25, 5, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 1, y - 26, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x - 3, y - 25, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x - 5, y - 22, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x - 5, y - 20, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x - 3, y - 18, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();



            /*Circle*/
            crc2.beginPath();
            crc2.arc(x, y - 20, 4, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = circleColor;
            crc2.fill();
        }


    }
}
