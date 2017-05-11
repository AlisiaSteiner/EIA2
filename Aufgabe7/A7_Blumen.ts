namespace Aufgabe7 {


export class Blumen {
    
    x: number;
    y: number;
    

    
    
    
    
        drawSunflower(x: number, y: number): void {

        /* Stängel */
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x, y - 30);
        crc2.closePath();
        crc2.strokeStyle = "#008000";
        crc2.stroke();

        /*Blüte*/
        /*1*/
        crc2.beginPath();
        crc2.moveTo(x, y - 35);
        crc2.quadraticCurveTo(x + 2, y - 10, x + 20, y - 15);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(x + 20, y - 15);
        crc2.quadraticCurveTo(x + 18, y - 40, x, y - 35);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();

        /*2*/
        crc2.beginPath();
        crc2.moveTo(x, y - 35);
        crc2.quadraticCurveTo(x + 10, y - 20, x + 25, y - 40);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(x + 25, y - 40);
        crc2.quadraticCurveTo(x + 10, y - 55, x, y - 35);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();

        /*3*/
        crc2.beginPath();
        crc2.moveTo(x, y - 35);
        crc2.quadraticCurveTo(x + 16, y - 45, x + 2, y - 60);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(x + 2, y - 60);
        crc2.quadraticCurveTo(x - 14, y - 45, x, y - 35);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "##e6ac00";
        crc2.stroke();
        crc2.fill();

        /*4*/

        crc2.beginPath();
        crc2.moveTo(x, y - 35);
        crc2.quadraticCurveTo(x - 10, y - 20, x - 25, y - 40);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(x - 25, y - 40);
        crc2.quadraticCurveTo(x - 10, y - 55, x, y - 35);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();

        /*5*/
        crc2.beginPath();
        crc2.moveTo(x, y - 35);
        crc2.quadraticCurveTo(x - 2, y - 10, x - 20, y - 15);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(x - 20, y - 15);
        crc2.quadraticCurveTo(x - 18, y - 40, x, y - 35);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();

        /*6*/
        crc2.beginPath();
        crc2.moveTo(x, y - 35);
        crc2.quadraticCurveTo(x + 16, y - 30, x + 2, y - 10);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(x + 2, y - 10);
        crc2.quadraticCurveTo(x - 14, y - 30, x, y - 35);
        crc2.closePath();
        crc2.fillStyle = "#ffff00";
        crc2.strokeStyle = "#e6ac00";
        crc2.stroke();
        crc2.fill();


        /*Kreis*/
        crc2.beginPath();
        crc2.arc(x, y - 35, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#804000";
        crc2.fill();

    }

    drawPrimRose(x: number, y: number): void {

        /* Stängel */
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x, y - 20);
        crc2.closePath();
        crc2.strokeStyle = "#008000";
        crc2.stroke();

        /*Blüte */

        crc2.fillStyle = "#ff6600";
        crc2.beginPath();
        crc2.moveTo(x, y - 20);
        crc2.arc(x + 5, y - 18, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 6, y - 22, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 4, y - 25, 5, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 1, y - 26, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x - 3, y - 25, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x - 5, y - 22, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x - 5, y - 20, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x - 3, y - 18, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();



        /*Kreis*/
        crc2.beginPath();
        crc2.arc(x, y - 20, 4, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffcc66";
        crc2.fill();
    }
    
    }
    }