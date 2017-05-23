/*
Aufgabe:    Aufgabe 8
Name:       Alisia Steiner
Matrikel:   254788
Datum:      18.05.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe8 {


    export class SpecialBees extends Bees {

        x: number;
        y: number;
        bodycolor: string;
        wingcolor: string;
        xTarget: number;
        yTarget: number;


        constructor() {

            super();
            console.log("Hallo, ich bin eine Biene!");
            
//            this.setStartPosition();
            this.setTargetPosition();
            
        }

        setStartPosition(): void {

            this.x = 665;
            this.y = 345;

        }

        setTargetPosition(): void {

            let targetflower: number = Math.round(Math.random() * (Blumen.length - 1));
            this.xTarget = Blumen[targetflower].x;
            this.yTarget = Blumen[targetflower].y;
        }


        move(): void {

            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.setTargetPosition();
            }
            else {
                this.x += xDiff * 0.04;
                this.y += yDiff * 0.04;
            }
        }
        
                draw(_x: number, _y: number): void {

            /*Flügel 1*/
            crc2.beginPath();
            //        crc2.ellipse(_x, _y - 5, 2, 4, 45 * Math.PI/-150, Math.PI * 2, 0);
            crc2.closePath();
            crc2.fillStyle = this.wingcolor;
            crc2.fill();

            /*Stachel*/
            crc2.beginPath();
            crc2.moveTo(_x + 5, _y - 1);
            crc2.lineTo(_x + 10, _y + 0.5);
            crc2.lineTo(_x + 5, _y + 2);
            crc2.lineTo(_x + 5, _y);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();

            /*Körper*/

            crc2.beginPath();
            moveTo(_x, _y);
            //   crc2.ellipse(_x, _y, 6, 4, 0, Math.PI * 2, 0); 
            crc2.closePath();
            crc2.fillStyle = this.bodycolor;
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.stroke();

            /*Flügel 2*/

            crc2.beginPath();
            //        crc2.ellipse(_x + 2, _y - 5, 2, 4, 45 * Math.PI/180, Math.PI * 2, 0);
            crc2.closePath();
            crc2.fillStyle = this.wingcolor;
            crc2.fill();


        }


    }




}
