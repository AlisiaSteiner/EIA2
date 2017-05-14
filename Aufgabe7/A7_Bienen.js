var Aufgabe7;
(function (Aufgabe7) {
    class Bees {
        constructor() {
            console.log("Hallo, ich bin eine Biene!");
            this.x = 665;
            this.y = 345;
            this.setRandomColors();
            this.drawBee(this.x, this.y);
        }
        updatePosition() {
            console.log("");
            this.move();
            this.drawBee(this.x, this.y);
        }
        drawBee(_x, _y) {
            /*Flügel 1*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.ellipse(_x, _y - 5, 2, 4, 45 * Math.PI/-150, Math.PI * 2, 0);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = this.wingcolor;
            Aufgabe7.crc2.fill();
            /*Stachel*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(_x + 5, _y - 1);
            Aufgabe7.crc2.lineTo(_x + 10, _y + 0.5);
            Aufgabe7.crc2.lineTo(_x + 5, _y + 2);
            Aufgabe7.crc2.lineTo(_x + 5, _y);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "black";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            /*Körper*/
            Aufgabe7.crc2.beginPath();
            moveTo(_x, _y);
            Aufgabe7.crc2.ellipse(_x, _y, 6, 4, 0, Math.PI * 2, 0); 
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = this.bodycolor;
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.strokeStyle = "black";
            Aufgabe7.crc2.stroke();
            /*Flügel 2*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.ellipse(_x + 2, _y - 5, 2, 4, 45 * Math.PI/180, Math.PI * 2, 0);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = this.wingcolor;
            Aufgabe7.crc2.fill();
        }
        move() {
            this.x += Math.random() * 5 - 3;
            this.y += Math.random() * 3.8 - 2;
        }
        setRandomColors() {
            this.bodycolor = "hsl(" + Math.random() * 70 + ", 100%, 50%)";
            this.wingcolor = "hsl(" + Math.random() * 150 + 150 + ", 100%, 60%)";
        }
    }
    Aufgabe7.Bees = Bees;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=A7_Bienen.js.map