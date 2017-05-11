var Aufgabe7;
(function (Aufgabe7) {
    class Blumen {
        drawSunflower(x, y) {
            /* Stängel */
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y);
            Aufgabe7.crc2.lineTo(x, y - 30);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.strokeStyle = "#008000";
            Aufgabe7.crc2.stroke();
            /*Blüte*/
            /*1*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y - 35);
            Aufgabe7.crc2.quadraticCurveTo(x + 2, y - 10, x + 20, y - 15);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x + 20, y - 15);
            Aufgabe7.crc2.quadraticCurveTo(x + 18, y - 40, x, y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*2*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y - 35);
            Aufgabe7.crc2.quadraticCurveTo(x + 10, y - 20, x + 25, y - 40);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x + 25, y - 40);
            Aufgabe7.crc2.quadraticCurveTo(x + 10, y - 55, x, y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*3*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y - 35);
            Aufgabe7.crc2.quadraticCurveTo(x + 16, y - 45, x + 2, y - 60);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x + 2, y - 60);
            Aufgabe7.crc2.quadraticCurveTo(x - 14, y - 45, x, y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "##e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*4*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y - 35);
            Aufgabe7.crc2.quadraticCurveTo(x - 10, y - 20, x - 25, y - 40);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x - 25, y - 40);
            Aufgabe7.crc2.quadraticCurveTo(x - 10, y - 55, x, y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*5*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y - 35);
            Aufgabe7.crc2.quadraticCurveTo(x - 2, y - 10, x - 20, y - 15);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x - 20, y - 15);
            Aufgabe7.crc2.quadraticCurveTo(x - 18, y - 40, x, y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*6*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y - 35);
            Aufgabe7.crc2.quadraticCurveTo(x + 16, y - 30, x + 2, y - 10);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x + 2, y - 10);
            Aufgabe7.crc2.quadraticCurveTo(x - 14, y - 30, x, y - 35);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffff00";
            Aufgabe7.crc2.strokeStyle = "#e6ac00";
            Aufgabe7.crc2.stroke();
            Aufgabe7.crc2.fill();
            /*Kreis*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x, y - 35, 8, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#804000";
            Aufgabe7.crc2.fill();
        }
        drawPrimRose(x, y) {
            /* Stängel */
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y);
            Aufgabe7.crc2.lineTo(x, y - 20);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.strokeStyle = "#008000";
            Aufgabe7.crc2.stroke();
            /*Blüte */
            Aufgabe7.crc2.fillStyle = "#ff6600";
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y - 20);
            Aufgabe7.crc2.arc(x + 5, y - 18, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x + 6, y - 22, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x + 4, y - 25, 5, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x + 1, y - 26, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x - 3, y - 25, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x - 5, y - 22, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x - 5, y - 20, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x - 3, y - 18, 5, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            /*Kreis*/
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x, y - 20, 4, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#ffcc66";
            Aufgabe7.crc2.fill();
        }
    }
    Aufgabe7.Blumen = Blumen;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=A7_Blumen.js.map