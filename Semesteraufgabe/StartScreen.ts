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

    export class StartScreen {

        constructor() {
            
            this.drawScreenAndText();
            
            }
        
        drawScreenAndText(): void {
            
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.rect(20, 20, 760, 460);
            crc2.globalAlpha = 0.8;
            crc2.closePath();
            crc2.fill();
            
            
            crc2.fillStyle = "white";
            crc2.font = "30px Arial";
            crc2.textAlign = "center";
            crc2.fillText("Oh no!! The graveyard is haunted by ghosts!", canvas.width / 2, canvas.height / 2 - 55);
            crc2.fillText("Expel the white ghosts and banish the angry ones", canvas.width / 2, canvas.height / 2 - 20);
            crc2.fillText("to defend the yard through the night!", canvas.width / 2, canvas.height / 2 + 20);
            crc2.fillText("Click START to fight!", canvas.width / 2, canvas.height / 2 + 55);
            
            
            }
        
        }
    }
