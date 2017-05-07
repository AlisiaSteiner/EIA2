var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    let crc2;
    let imgData;
    let n = 10;
    let beePositions = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky();
        drawLawn();
        drawBigMountain();
        drawLittleMountain(50, 250);
        drawLittleMountain(500, 250);
        drawSun();
        drawSunflower(430, 400);
        drawSunflower(500, 275);
        drawSunflower(700, 460);
        drawCloud(550, 50);
        drawCloud(180, 100);
        drawPrimRose(450, 300);
        drawPrimRose(550, 330);
        drawPrimRose(570, 450);
        drawRandomFlower();
        drawBeeHive();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        /* 10 Bienen zeichnen */
        for (let i = 0; i < n; i++) {
            let b = { x: 0, y: 0 };
            b.x = 665;
            b.y = 345;
            console.log(b);
            drawBee(b.x, b.y);
            b = beePositions[i];
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", drawAnotherBee);
        canvas.addEventListener("touch", drawAnotherBee);
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
        crc2.moveTo(x, y);
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
        crc2.moveTo(100, 250);
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
    function drawSun() {
        crc2.beginPath();
        crc2.arc(650, 60, 50, 0, 2 * Math.PI);
        crc2.closePath();
        let gradient = crc2.createRadialGradient(650, 60, 10, 650, 60, 100);
        gradient.addColorStop(0, "#ffff00");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawCloud(x, y) {
        crc2.fillStyle = "#f2f2f2";
        crc2.strokeStyle = "#f2f2f2";
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.arc(x, y - 5, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 5, y + 20, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 30, y + 20, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 30, y - 20, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 50, y - 10, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 52, y + 15, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawSunflower(x, y) {
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
    function drawPrimRose(x, y) {
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
    function drawRandomFlower() {
        for (let i = 0; i < 10; i++) {
            let x = Math.floor(Math.random() * 420 + 20);
            let y = Math.floor(Math.random() * 250 + 260);
            let flowerType = Math.floor(Math.random() * 2);
            if (flowerType == 0) {
                drawSunflower(x, y);
            }
            else {
                drawPrimRose(x, y);
            }
        }
    }
    /* Aufgabe5 Ergänzungen */
    function drawBeeHive() {
        crc2.beginPath();
        crc2.arc(665, 307, 20, 0, 2 * Math.PI);
        crc2.arc(665, 325, 27, 0, 2 * Math.PI);
        crc2.rect(640, 345, 50, 10);
        crc2.closePath();
        crc2.fillStyle = "#804000";
        crc2.fill();
        crc2.beginPath();
        crc2.rect(660, 340, 10, 10);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.fill();
    }
    function drawBee(_x, _y) {
        /*Flügel 1*/
        crc2.beginPath();
                crc2.ellipse(_x , _y - 5, 2, 4, 45 * Math.PI/-150, Math.PI * 2, 0);
        crc2.closePath();
        crc2.fillStyle = "#e6e6e6";
        crc2.fill();
        /*Stachel*/
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 1);
        crc2.lineTo(_x + 10, _y + 0.5);
        crc2.lineTo(_x + 5, _y + 2);
        crc2.lineTo(_x + 5, _y);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.stroke();
        /*Körper*/
        crc2.beginPath();
        moveTo(_x, _y);
           crc2.ellipse(_x, _y, 6, 4, 0, Math.PI * 2, 0); 
        crc2.closePath();
        crc2.fillStyle = "#ffcc00";
        crc2.fill();
        crc2.strokeStyle = "black";
        crc2.stroke();
        /*Flügel 2*/
        crc2.beginPath();
               crc2.ellipse(_x + 2, _y - 5, 2, 4, 45 * Math.PI/180, Math.PI * 2, 0);
        crc2.closePath();
        crc2.fillStyle = "#e6e6e6";
        crc2.fill();
        console.log("Bee drawn");
    }
    function drawAnotherBee() {
        beePositions.push({ x: 665, y: 345 });
        n++;
    }
    function animate() {
        crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            let b = { x: 0, y: 0 };
            b = beePositions[i];
            b.x += Math.random() * 5 - 3;
            b.y += Math.random() * 3.8 - 2;
            if (b.x > 801) {
                b.x = 0;
            }
            if (b.x < 0) {
                b.x = 800;
            }
            if (b.y > 500) {
                b.y = 0;
            }
            if (b.y < 0) {
                b.y = 500;
            }
            drawBee(b.x, b.y);
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=A5.js.map