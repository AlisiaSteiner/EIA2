namespace Aufgabe7 {


export class Bees {
        
        x: number;
        y: number;
        bodycolor: string;
        wingcolor: string;
   
        
    
    updatePosition(): void {
            
            this.move();
            this.drawBee();
            }
    
    
    
     drawBee(): void {
            
            /*Flügel 1*/
        crc2.beginPath();
        //        crc2.ellipse(this.x, this.y - 5, 2, 4, 45 * Math.PI/-150, Math.PI * 2, 0);
        crc2.closePath();
        crc2.fillStyle = this.wingcolor;
        crc2.fill();

        /*Stachel*/
        crc2.beginPath();
        crc2.moveTo(this.x + 5, this.y - 1);
        crc2.lineTo(this.x + 10, this.y + 0.5);
        crc2.lineTo(this.x + 5, this.y + 2);
        crc2.lineTo(this.x + 5, this.y);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.stroke();

        /*Körper*/

        crc2.beginPath();
        moveTo(this.x, this.y);
        //   crc2.ellipse(this.x, this.y, 6, 4, 0, Math.PI * 2, 0); 
        crc2.closePath();
        crc2.fillStyle = this.bodycolor;
        crc2.fill();
        crc2.strokeStyle = "black";
        crc2.stroke();

        /*Flügel 2*/

        crc2.beginPath();
        //        crc2.ellipse(this.x + 2, this.y - 5, 2, 4, 45 * Math.PI/180, Math.PI * 2, 0);
        crc2.closePath();
        crc2.fillStyle = this.wingcolor;
        crc2.fill();
        }
    
    
     move(): void {
            
            this.x += Math.random() * 5 - 3;
            this.y *= Math.random() * 3.8 - 2;
            
        }

      setRandomColors(): void {
            
            this.bodycolor = "hsl(" + Math.random() * 70 + ", 100%, 50%)";
            this.wingcolor = "hsl(" + Math.random() * 150 + 150 + ", 100%, 60%)";
 
            }


    }

    }