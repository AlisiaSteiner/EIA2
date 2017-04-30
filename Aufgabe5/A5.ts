namespace Aufgabe4 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let n: number = 10;
    let x: number[] = [];
    let y: number[] = [];



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
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

        for (let i: number = 0; i < n; i++) {
            x[i] = 665;
            y[i] = 345;

            drawBee(x[i], y[i]);

        }


        window.setTimeout(animate, 30);
        canvas.addEventListener("click", drawAnotherBee);
        canvas.addEventListener("touch", drawAnotherBee);

    }



    function drawSky(): void {
        crc2.beginPath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "#80aaff");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 250);
        crc2.closePath();
        crc2.stroke();
    }

    function drawLawn(): void {

        crc2.beginPath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "#39e600");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 250, crc2.canvas.width, 250);
        crc2.closePath();
        crc2.stroke();
    }



    function drawLittleMountain(x: number, y: number): void {

        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 50, y - 100);
        crc2.lineTo(x + 100, y);
        crc2.lineTo(x, y);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "#a6a6a6");
        crc2.fillStyle = gradient;
        crc2.fill();

    }

    function drawBigMountain(): void {

        crc2.beginPath();
        crc2.moveTo(100, 250);
        crc2.lineTo(270, 50);
        crc2.lineTo(320, 250);
        crc2.lineTo(100, 250);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "#737373");
        crc2.fillStyle = gradient;
        crc2.fill();

    }

    function drawSun(): void {

        crc2.beginPath();
        crc2.arc(650, 60, 50, 0, 2 * Math.PI);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createRadialGradient(650, 60, 10, 650, 60, 100);
        gradient.addColorStop(0, "#ffff00");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fill();

    }

    function drawCloud(x: number, y: number): void {

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


    function drawSunflower(x: number, y: number): void {

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

    function drawPrimRose(x: number, y: number): void {

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



    function drawRandomFlower(): void {

        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.floor(Math.random() * 420 + 20);
            let y: number = Math.floor(Math.random() * 250 + 260);
            let flowerType: number = Math.floor(Math.random() * 2);
            if (flowerType == 0) {
                drawSunflower(x, y);
            }
            else {
                drawPrimRose(x, y);
            }

        }
    }

    /* Aufgabe5 Ergänzungen */


    function drawBeeHive(): void {

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



    function drawBee(x: number, y: number): void {

        
        
        /*Flügel 1*/
         crc2.beginPath();
        //        crc2.ellipse(x , y - 5, 2, 4, 45 * Math.PI/-150, Math.PI * 2, 0);
        crc2.closePath();
        crc2.fillStyle = "#e6e6e6";
        crc2.fill();
        
        /*Stachel*/
        crc2.beginPath();
        crc2.moveTo(x + 5, y - 1 );
        crc2.lineTo(x + 10, y + 0.5);
        crc2.lineTo(x + 5, y + 2);
        crc2.lineTo(x + 5, y);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.stroke();
        
        /*Körper*/
        
        crc2.beginPath();
        moveTo(x, y);
        //   crc2.ellipse(x, y, 6, 4, 0, Math.PI * 2, 0); 
        crc2.closePath();
        crc2.fillStyle = "#ffcc00";
        crc2.fill();
        crc2.strokeStyle = "black";
        crc2.stroke();

        /*Flügel 2*/

        crc2.beginPath();
        //        crc2.ellipse(x + 2, y - 5, 2, 4, 45 * Math.PI/180, Math.PI * 2, 0);
        crc2.closePath();
        crc2.fillStyle = "#e6e6e6";
        crc2.fill();

        
    }

    function drawAnotherBee(): void {

        x.push(665);
        y.push(345);
        n++;
    }


    function animate(): void {

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < n; i++) {

            x[i] += Math.random() * 5 - 3;
            y[i] += Math.random() * 3.8 - 2;

            if (x[i] > 801) {
                x[i] = 0;
            }
            if (x[i] < 0) {
                x[i] = 800;
            }
            if (y[i] > 500) {
                y[i] = 0;
            }
            if (y[i] < 0) {
                y[i] = 500;
            }

            drawBee(x[i], y[i]);
        }

        window.setTimeout(animate, 20);

    }






}