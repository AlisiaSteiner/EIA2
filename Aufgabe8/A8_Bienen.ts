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


export class Bees {
        
        x: number;
        y: number;
        bodycolor: string;
        wingcolor: string;
   

    
    constructor() {
        
        console.log("Hallo, ich bin eine Biene!");
        
        this.draw();
        
        } 
    
    updatePosition(): void {
            
            
            this.move();
            this.draw();
        
            }
    
    draw(): void { }
    
    
         
    
     move(): void {       
        }

     

    }

    }