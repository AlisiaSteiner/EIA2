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

    export class AngryGhost extends Ghost {

        x: number;
        y: number;
        height: number;
        width: number;



        constructor() {

            super();

            console.log("Oh no - an angry ghost!!");
            
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

            crc2.fillStyle = "#808080";
            crc2.strokeStyle = "black";
            crc2.shadowBlur = 30;
            crc2.shadowColor = "yellow";
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
            
            crc2.fillStyle = "#ff3300";
            crc2.strokeStyle = "#ff3300";
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

        }

        move(): void {

        }

        disappear(): void {


     }
        
        
        }
    }
