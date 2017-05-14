var Aufgabe7;
(function (Aufgabe7) {
    class Blumen {
        constructor() {
            this.drawRandomFlower();
        }
        randomPosition() {
            this.x = Math.floor(Math.random() * 420 + 20);
            this.y = Math.floor(Math.random() * 250 + 260);
        }
        drawRandomFlower() {
            for (let i = 0; i < 10; i++) {
                this.randomPosition();
                let flowerType = Math.floor(Math.random() * 2);
                if (flowerType == 0) {
                    this.drawSunflower();
                }
                else {
                    this.drawPrimRose();
                }
                console.log("Neue Blume gepflanzt");
            }
        }
        drawSunflower() {
            /* Stängel */
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x, this.y);
            Aufgabe7.crc2.lineTo(this.x, this.y - 30);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.strokeStyle = "#008000";
            Aufgabe7.crc2.stroke();
            /*Blüte*/
            /*1*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x, this.y - 35);
            Aufgabe7.crc2.quadraticCurveTo(this.x + 2, this.y - 10, this.x + 20, this.y - 15);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x + 20, this.y - 15);
            Aufgabe7.crc2.quadraticCurveTo(this.x + 18, this.y - 40, this.x, this.y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*2*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x, this.y - 35);
            Aufgabe7.crc2.quadraticCurveTo(this.x + 10, this.y - 20, this.x + 25, this.y - 40);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x + 25, this.y - 40);
            Aufgabe7.crc2.quadraticCurveTo(this.x + 10, this.y - 55, this.x, this.y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*3*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x, this.y - 35);
            Aufgabe7.crc2.quadraticCurveTo(this.x + 16, this.y - 45, this.x + 2, this.y - 60);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x + 2, this.y - 60);
            Aufgabe7.crc2.quadraticCurveTo(this.x - 14, this.y - 45, this.x, this.y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "##e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*4*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x, this.y - 35);
            Aufgabe7.crc2.quadraticCurveTo(this.x - 10, this.y - 20, this.x - 25, this.y - 40);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x - 25, this.y - 40);
            Aufgabe7.crc2.quadraticCurveTo(this.x - 10, this.y - 55, this.x, this.y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*5*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x, this.y - 35);
            Aufgabe7.crc2.quadraticCurveTo(this.x - 2, this.y - 10, this.x - 20, this.y - 15);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x - 20, this.y - 15);
            Aufgabe7.crc2.quadraticCurveTo(this.x - 18, this.y - 40, this.x, this.y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*6*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x, this.y - 35);
            Aufgabe7.crc2.quadraticCurveTo(this.x + 16, this.y - 30, this.x + 2, this.y - 10);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x + 2, this.y - 10);
            Aufgabe7.crc2.quadraticCurveTo(this.x - 14, this.y - 30, this.x, this.y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*Kreis*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x, this.y - 35, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#804000";
            Aufgabe7.crc2.fill();
        }
        drawPrimRose() {
            /* Stängel */
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x, this.y);
            Aufgabe7.crc2.lineTo(this.x, this.y - 20);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.strokeStyle = "#008000";
            Aufgabe7.crc2.stroke();
            /*Blüte */
            Aufgabe7.crc2.fillStyle = "#ff6600";
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x, this.y - 20);
            Aufgabe7.crc2.arc(this.x + 5, this.y - 18, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 6, this.y - 22, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 4, this.y - 25, 5, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x + 1, this.y - 26, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 3, this.y - 25, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 5, this.y - 22, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 5, this.y - 20, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x - 3, this.y - 18, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            /*Kreis*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x, this.y - 20, 4, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffcc66";
            Aufgabe7.crc2.fill();
        }
    }
    Aufgabe7.Blumen = Blumen;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=A7_Blumen.js.map