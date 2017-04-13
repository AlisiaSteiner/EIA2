var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky();
        drawLawn();
        drawBigMountain();
        drawLittleMountain(50, 250);
        drawLittleMountain(500, 250);
    }
    function drawSky() {
        crc2.beginPath();
        let gradient = crc2.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "#80aaff");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 250);
        crc2.closePath();
        crc2.stroke();
    }
    function drawLawn() {
        crc2.beginPath();
        let gradient = crc2.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "#39e600");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 250, crc2.canvas.width, 250);
        crc2.closePath();
        crc2.stroke();
    }
    function drawLittleMountain(x, y) {
        crc2.beginPath();
        moveTo(x, y);
        crc2.lineTo(x + 50, y - 100);
        crc2.lineTo(x + 100, y);
        crc2.lineTo(x, y);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "#a6a6a6");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawBigMountain() {
        crc2.beginPath();
        moveTo(100, 250);
        crc2.lineTo(270, 50);
        crc2.lineTo(320, 250);
        crc2.lineTo(100, 250);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "#737373");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=A4.js.map