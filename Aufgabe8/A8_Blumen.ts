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


    export class Blumen {

        x: number;
        y: number;



        constructor() {
            

            this.randomPosition();
            this.draw();

        }



        randomPosition(): void {

            this.x = Math.floor(Math.random() * 420 + 20);
            this.y = Math.floor(Math.random() * 250 + 260);

        }
     
        

        draw(): void{           }
        
        }
    }