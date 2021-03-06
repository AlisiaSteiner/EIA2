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
            crc2.globalAlpha = 0.8;
            crc2.closePath();
            crc2.fill();
            
            
            crc2.fillStyle = "white";
            crc2.font = "30px Arial";
            crc2.textAlign = "center";
            crc2.fillText("Hey! You have successfully defended the graveyard", canvas.width / 2, canvas.height / 2 - 55);
            crc2.fillText("and saved the souls of the death.", canvas.width / 2, canvas.height / 2 - 20);
            crc2.fillText("The sun is rising and it's time for you, to take a break.", canvas.width / 2, canvas.height / 2 + 20);
            crc2.fillText("See you, little hero!", canvas.width / 2, canvas.height / 2 + 55);
            
            
            }
        
        }
    }
