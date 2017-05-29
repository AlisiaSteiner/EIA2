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


    export class Primrose extends Blumen {

        x: number;
        y: number;



        constructor(_x: number, _y: number) {
            super();
            
            this.x = _x;
            this.y = _y;
            this.draw();
            }
            
            draw(): void {

            /* Stängel */
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 20);
            crc2.closePath();
            crc2.strokeStyle = "#008000";
            crc2.stroke();

            /*Blüte */

            crc2.fillStyle = "#ff6600";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 20);
            crc2.arc(this.x + 5, this.y - 18, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 6, this.y - 22, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 4, this.y - 25, 5, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 1, this.y - 26, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 3, this.y - 25, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 5, this.y - 22, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 5, this.y - 20, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 3, this.y - 18, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();



            /*Kreis*/
            crc2.beginPath();
            crc2.arc(this.x, this.y - 20, 4, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#ffcc66";
            crc2.fill();
        }

    }
}