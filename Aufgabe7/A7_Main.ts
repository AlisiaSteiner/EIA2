namespace Aufgabe7 {
    window.addEventListener("load", init);
   export  let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let n: number = 10;


    interface BeeData {
        x: number;
        y: number;
       wingcolor: string;
        bodycolor: string;
    }

    let beePositions: BeeData[] = [];



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
                drawPrimRose(450, 300);
        drawPrimRose(550, 330);
        drawPrimRose(570, 450);
        drawRandomFlower();
        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        /* 10 Bienen zeichnen */

        for (let i: number = 0; i < n; i++) {

            let b: BeeData = { x: 0, y: 0, bodycolor: "#ff000", wingcolor: "0000ff"};
            b.x = 665;
            b.y = 345;
            b.bodycolor = "hsl(" + Math.random() * 70 + ", 100%, 50%)";
            b.wingcolor = "hsl(" + Math.random() * 150 + 150 + ", 100%, 60%)";
            console.log(b.bodycolor);

            drawBee(b.x, b.y, b.bodycolor, b.wingcolor);
            beePositions[i] = b;


        }


        window.setTimeout(animate, 30);
        canvas.addEventListener("click", drawAnotherBee);
        canvas.addEventListener("touch", drawAnotherBee);

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






    

    function drawAnotherBee(): void {

        beePositions.push( { x: 665, y: 345, bodycolor: "hsl(" + Math.random() * 70 + ", 100%, 50%)", wingcolor: "hsl(" + Math.random() * 150 + 150 + ", 100%, 60%)"} );
        n++;
    }


    function animate(): void {

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < n; i++) {

            let b: BeeData = {x: 0, y: 0, bodycolor: "", wingcolor: ""};
            b = beePositions[i];
            
            
            b.x += Math.random() * 5 - 3;
            b.y += Math.random() * 3.8 - 2;

            if ( b.x > 801) {
                 b.x = 0;
            }
            if ( b.x < 0) {
                 b.x = 800;
            }
            if (b.y > 500) {
                b.y = 0;
            }
            if (b.y < 0) {
                b.y = 500;
            }

            drawBee(b.x, b.y, b.bodycolor, b.wingcolor);
        }

        window.setTimeout(animate, 20);

    }






}