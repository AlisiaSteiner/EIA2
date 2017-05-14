namespace Aufgabe7 {


    export class Blumen {

        x: number;
        y: number;



        constructor() {


            this.drawRandomFlower();

        }



        randomPosition(): void {

            this.x = Math.floor(Math.random() * 420 + 20);
            this.y = Math.floor(Math.random() * 250 + 260);

        }
     
        

        drawRandomFlower(): void {

                this.randomPosition();

                let flowerType: number = Math.floor(Math.random() * 2);
                if (flowerType == 0) {
                    this.drawSunflower();
                }
                else {
                    this.drawPrimRose();
                }

                console.log("Neue Blume gepflanzt");
            }
        


        drawSunflower(): void {

            /* Stängel */
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 30);
            crc2.closePath();
            crc2.strokeStyle = "#008000";
            crc2.stroke();

            /*Blüte*/
            /*1*/
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 35);
            crc2.quadraticCurveTo(this.x + 2, this.y - 10, this.x + 20, this.y - 15);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();


            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y - 15);
            crc2.quadraticCurveTo(this.x + 18, this.y - 40, this.x, this.y - 35);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();

            /*2*/
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 35);
            crc2.quadraticCurveTo(this.x + 10, this.y - 20, this.x + 25, this.y - 40);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();


            crc2.beginPath();
            crc2.moveTo(this.x + 25, this.y - 40);
            crc2.quadraticCurveTo(this.x + 10, this.y - 55, this.x, this.y - 35);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();

            /*3*/
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 35);
            crc2.quadraticCurveTo(this.x + 16, this.y - 45, this.x + 2, this.y - 60);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();


            crc2.beginPath();
            crc2.moveTo(this.x + 2, this.y - 60);
            crc2.quadraticCurveTo(this.x - 14, this.y - 45, this.x, this.y - 35);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "##e6ac00";
            crc2.stroke();
            crc2.fill();

            /*4*/

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 35);
            crc2.quadraticCurveTo(this.x - 10, this.y - 20, this.x - 25, this.y - 40);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();


            crc2.beginPath();
            crc2.moveTo(this.x - 25, this.y - 40);
            crc2.quadraticCurveTo(this.x - 10, this.y - 55, this.x, this.y - 35);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();

            /*5*/
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 35);
            crc2.quadraticCurveTo(this.x - 2, this.y - 10, this.x - 20, this.y - 15);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();


            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y - 15);
            crc2.quadraticCurveTo(this.x - 18, this.y - 40, this.x, this.y - 35);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();

            /*6*/
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 35);
            crc2.quadraticCurveTo(this.x + 16, this.y - 30, this.x + 2, this.y - 10);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();


            crc2.beginPath();
            crc2.moveTo(this.x + 2, this.y - 10);
            crc2.quadraticCurveTo(this.x - 14, this.y - 30, this.x, this.y - 35);
            crc2.closePath();
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#e6ac00";
            crc2.stroke();
            crc2.fill();


            /*Kreis*/
            crc2.beginPath();
            crc2.arc(this.x, this.y - 35, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#804000";
            crc2.fill();

        }

        drawPrimRose(): void {

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