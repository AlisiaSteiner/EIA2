namespace Aufgabe7 {


export class Background {
    
    x: number;
    y: number;
    
    
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
    
    
    drawSky(): void {
        crc2.beginPath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "#80aaff");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 250);
        crc2.closePath();
        crc2.stroke();
    }

    drawLawn(): void {

        crc2.beginPath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "#39e600");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 250, crc2.canvas.width, 250);
        crc2.closePath();
        crc2.stroke();
    }



    drawLittleMountain(x: number, y: number): void {

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

    drawBigMountain(): void {

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

    drawSun(): void {

        crc2.beginPath();
        crc2.arc(650, 60, 50, 0, 2 * Math.PI);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createRadialGradient(650, 60, 10, 650, 60, 100);
        gradient.addColorStop(0, "#ffff00");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fill();

    }

    drawCloud(x: number, y: number): void {

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
        drawBeeHive(): void {

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
    
   }
    
  }