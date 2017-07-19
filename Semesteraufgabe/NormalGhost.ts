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

    export class NormalGhost extends Ghost {

        x: number;
        y: number;
        height: number;
        width: number;



        constructor() {

            super();
            
            console.log("Oh, it's just a normal one!");

            this.randomSize();
            this.randomPosition();
            this.drawGhost();

        }

        randomSize(): void {

            this.height = ((Math.random() * 30) + 10);
            this.width = ((Math.random() * 20) + 15);
                         
        }

        randomPosition(): void {
            
            this.x = ((Math.random() * 780) + 10);
            this.y = ((Math.random() * 475));


        }

        drawGhost(): void {
            
            /* Ghost Body */

            crc2.fillStyle = "#f2f2f2";
            crc2.strokeStyle = "#e6e6e6";
            crc2.shadowBlur = 30;
            crc2.shadowColor = "#f2f2f2";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x, this.y - this.height, this.x + this.width, this.y - this.height, this.x + this.width, this.y);
            crc2.lineTo(this.x + this.width, this.y + (2 * this.height));
            crc2.arc(this.x + this.width - (0.1 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, false);
            crc2.arc((this.x + this.width) - (0.3 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, true);
            crc2.arc(this.x + this.width - (0.5 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, false);
            crc2.arc((this.x + this.width) - (0.7 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, true);
            crc2.arc(this.x + this.width - (0.9 * this.width), this.y + (2 * this.height), (0.1 * this.width), 0, Math.PI, false);
            crc2.globalAlpha = 0.9;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            
            
            /* Ghost-Eyes */
            
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.shadowBlur = 0;
            crc2.globalAlpha = 1;
           
            crc2.beginPath();
            crc2.arc(this.x + (0.3 * this.width), this.y - 0.1 * this.height, (0.1 * this.width), 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.arc(this.x + (0.7 * this.width), this.y - 0.1 * this.height, (0.1 * this.width), 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
            



        }
        update(): void {

            this.move();
            this.drawGhost();
        }

        move(): void {

        this.x += Math.random() * 50 - 23;
        this.y += Math.random() * 30 - 15;
        }

        disappear(_x: number, _y: number): void {

            console.log("Geist vertrieben");
            
            crc2.fillStyle = "";
            crc2.strokeStyle = "#f9f9f9";
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y - 5, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 5, _y + 20, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 30, _y + 20, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 30, _y - 20, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 54, _y - 10, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 58, _y + 16, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }











    }

}