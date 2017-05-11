var Aufgabe7;
(function (Aufgabe7) {
    class Background {
        constructor() {
            this.drawSky();
            this.drawLawn();
            this.drawBigMountain();
            this.drawLittleMountain(50, 250);
            this.drawLittleMountain(500, 250);
            this.drawSun();
            this.drawCloud(550, 50);
            this.drawCloud(180, 100);
            this.drawBeeHive();
        }
        drawSky() {
            Aufgabe7.crc2.beginPath();
            let gradient = Aufgabe7.crc2.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "#80aaff");
            gradient.addColorStop(1, "white");
            Aufgabe7.crc2.fillStyle = gradient;
            Aufgabe7.crc2.fillRect(0, 0, Aufgabe7.crc2.canvas.width, 250);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.stroke();
        }
        drawLawn() {
            Aufgabe7.crc2.beginPath();
            let gradient = Aufgabe7.crc2.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "#39e600");
            Aufgabe7.crc2.fillStyle = gradient;
            Aufgabe7.crc2.fillRect(0, 250, Aufgabe7.crc2.canvas.width, 250);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.stroke();
        }
        drawLittleMountain(x, y) {
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y);
            Aufgabe7.crc2.lineTo(x + 50, y - 100);
            Aufgabe7.crc2.lineTo(x + 100, y);
            Aufgabe7.crc2.lineTo(x, y);
            Aufgabe7.crc2.closePath();
            let gradient = Aufgabe7.crc2.createLinearGradient(0, 0, 0, 450);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "#a6a6a6");
            Aufgabe7.crc2.fillStyle = gradient;
            Aufgabe7.crc2.fill();
        }
        drawBigMountain() {
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(100, 250);
            Aufgabe7.crc2.lineTo(270, 50);
            Aufgabe7.crc2.lineTo(320, 250);
            Aufgabe7.crc2.lineTo(100, 250);
            Aufgabe7.crc2.closePath();
            let gradient = Aufgabe7.crc2.createLinearGradient(0, 0, 0, 450);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "#737373");
            Aufgabe7.crc2.fillStyle = gradient;
            Aufgabe7.crc2.fill();
        }
        drawSun() {
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(650, 60, 50, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            let gradient = Aufgabe7.crc2.createRadialGradient(650, 60, 10, 650, 60, 100);
            gradient.addColorStop(0, "#ffff00");
            gradient.addColorStop(1, "white");
            Aufgabe7.crc2.fillStyle = gradient;
            Aufgabe7.crc2.fill();
        }
        drawCloud(x, y) {
            Aufgabe7.crc2.fillStyle = "#f2f2f2";
            Aufgabe7.crc2.strokeStyle = "#f2f2f2";
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.moveTo(x, y);
            Aufgabe7.crc2.arc(x, y - 5, 20, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x + 5, y + 20, 20, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x + 30, y + 20, 25, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x + 30, y - 20, 25, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x + 50, y - 10, 20, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(x + 52, y + 15, 20, 0, 2 * Math.PI);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fill();
        }
        drawBeeHive() {
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(665, 307, 20, 0, 2 * Math.PI);
            Aufgabe7.crc2.arc(665, 325, 27, 0, 2 * Math.PI);
            Aufgabe7.crc2.rect(640, 345, 50, 10);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#804000";
            Aufgabe7.crc2.fill();
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.rect(660, 340, 10, 10);
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = "#000000";
            Aufgabe7.crc2.fill();
        }
    }
    Aufgabe7.Background = Background;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=A7_Hintergrund.js.map