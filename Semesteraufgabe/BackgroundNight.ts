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

    export class BackgroundNight {

        constructor() {

            this.drawSky();
            this.drawGround();
            this.drawMoon();
            this.drawCloud(80, 80);
            this.drawCloud(170, 30);
            this.drawCloud(540, 70);
            this.drawCloud(290, 110);
            this.drawMist(660, 240);
            this.drawMist(40, 340);
            this.drawMist(290, 30);
            this.drawGrave1();
        }


        drawSky(): void {
            crc2.beginPath();
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, "#000033");
            gradient.addColorStop(1, "#51617b");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, 450);
            crc2.closePath();
            crc2.stroke();
        }

        drawGround(): void {

            crc2.beginPath();
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 450, 0, 500);
            gradient.addColorStop(0, "#684d2f");
            gradient.addColorStop(1, "#331a00");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 450, crc2.canvas.width, 50);
            crc2.closePath();
            crc2.stroke();
        }



        drawMoon(): void {

            crc2.beginPath();
            crc2.arc(700, 80, 50, 0, 2 * Math.PI);
            crc2.closePath();
            let gradient: CanvasGradient = crc2.createRadialGradient(650, 60, 10, 700, 80, 100);
            gradient.addColorStop(0, "#f5f4bd");
            gradient.addColorStop(1, "#eeec91");
            crc2.fillStyle = gradient;

            crc2.fill();


        }

        drawCloud(x: number, y: number): void {

            crc2.fillStyle = "#9fa1ad";
            crc2.strokeStyle = "#9fa1ad";
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

        drawMist(x: number, y: number): void {


            crc2.fillStyle = "#a3a3c2";
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(x + 220, y, x + 240, y - 150, x, y - 150);
            crc2.closePath();
            crc2.globalAlpha = 0.4;
            crc2.fill();

            crc2.fillStyle = "#a3a3c2";
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(x - 220, y, x - 240, y - 150, x, y - 150);
            crc2.closePath();
            crc2.globalAlpha = 0.4;
            crc2.fill();
        }

        drawGrave1(): void {
       
      
            /*Gravestone*/      
            
            crc2.fillStyle = "grey";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.moveTo(65, 492);
            crc2.lineTo(45, 352);
            crc2.lineTo(145, 342);
            crc2.lineTo(165, 484);
            crc2.globalAlpha = 1;
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

    }
}
