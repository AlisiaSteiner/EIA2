namespace Aufgabe7 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let n: number = 10;


    let beePositions: Bees[] = [];



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        let background: Background = new Background;
        let flowers: Blumen = new Blumen;


        for (let i: number = 0; i < n; i++) {

            let b: Bees = new Bees;

            console.log(i);
        }



        window.setTimeout(animate, 30);
        canvas.addEventListener("click", drawAnotherBee);
        canvas.addEventListener("touch", drawAnotherBee);

    }

    function drawAnotherBee(): void {

        console.log("Another Bee went on a flight!");
        let anotherBee: Bees = new Bees;
        beePositions.push(anotherBee);
        n++;
    }


    function animate(): void {

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < n; i++) {

            let b: Bees = beePositions[i];


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

            b.updatePosition();

        }

        window.setTimeout(animate, 20);

    }






}