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

    export class WinningScreen {

        constructor() {
            
            this.drawScreenAndText();
            
            }
        
        drawScreenAndText(): void {
            
            crc2.fillStyle = "#000033";
            crc2.beginPath();
            crc2.rect(20, 20, 760, 460);
            crc2.globalAlpha = 0.7;
            crc2.closePath();
            crc2.fill();
            
            
            }
        
        }
    }
