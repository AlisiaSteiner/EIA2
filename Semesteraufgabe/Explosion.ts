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

    export class Explosion {
        
       constructor(_x: number, _y: number, _color: string) {
           
           this.draw(_x, _y, _color);
           
           }
        
        
        
        
        draw(_x: number, _y: number, _color: string): void {
            
            
        crc2.fillStyle = _color;
        crc2.strokeStyle = _color;
        crc2.moveTo(_x, _y);
        crc2.arc(_x + 20, _y + 10, 60, 0, 2 * Math.PI);
        crc2.arc(_x + 30, _y + 30, 60, 0, 2 * Math.PI);
        crc2.arc(_x + 90, _y + 30, 60, 0, 2 * Math.PI);
        crc2.arc(_x + 70, _y - 20, 60, 0, 2 * Math.PI);
        crc2.arc(_x + 110, _y, 60, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
            }
        
        }
    }


