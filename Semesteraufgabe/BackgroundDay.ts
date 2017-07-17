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



        }


        drawSky(): void {
            crc2.beginPath();
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
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
        
        drawGrave1(): void {
            
        crc2.fillStyle = "#804000";
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(60, 490);
        crc2.arc(60, 490, 30, 1 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
            
            
         }
        
           }
}
