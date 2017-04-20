namespace Aufgabe4 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

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
        drawSunflower(200, 375);
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


        function drawSunflower(x: number, y: number): void {

            /* Stängel */
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x, y - 30);
            crc2.closePath();
            crc2.strokeStyle = "#008000";
            crc2.stroke();
            
            /*Blüte*/
            crc2.beginPath();
            crc2.arc(x, y - 35, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#804000";
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(x, y - 27);
            crc2.arc
            

        }
    }