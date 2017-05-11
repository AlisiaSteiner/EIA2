var Aufgabe7;
(function (Aufgabe7) {
    class Bees {
        drawBee() {
            /*Flügel 1*/
            Aufgabe7.crc2.beginPath();
            //        crc2.ellipse(this.x, this.y - 5, 2, 4, 45 * Math.PI/-150, Math.PI * 2, 0);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = this.wingcolor;
            Aufgabe7.crc2.fill();
            /*Stachel*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(this.x + 5, this.y - 1);
            Aufgabe7.crc2.lineTo(this.x + 10, this.y + 0.5);
            Aufgabe7.crc2.lineTo(this.x + 5, this.y + 2);
            Aufgabe7.crc2.lineTo(this.x + 5, this.y);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "black";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.stroke();
            /*Körper*/
            Aufgabe7.crc2.beginPath();
            moveTo(this.x, this.y);
            //   crc2.ellipse(this.x, this.y, 6, 4, 0, Math.PI * 2, 0); 
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = this.bodycolor;
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.strokeStyle = "black";
            Aufgabe7.crc2.stroke();
            /*Flügel 2*/
            Aufgabe7.crc2.beginPath();
            //        crc2.ellipse(this.x + 2, this.y - 5, 2, 4, 45 * Math.PI/180, Math.PI * 2, 0);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = this.wingcolor;
            Aufgabe7.crc2.fill();
        }
    }
    Aufgabe7.Bees = Bees;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=A7_Bienen.js.map