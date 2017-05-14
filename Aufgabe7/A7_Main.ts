namespace Aufgabe7 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let n: number = 10;
    let blumen: Blumen[] = [];


    let beePositions: Bees[] = [];



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");



        let background: Background = new Background;
        /* Random Flowers */
        for (let i: number = 0; i < 10; i++) {
            let randomFlower: Blumen = new Blumen;
        }


        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        /* --> Eben durch Zufall einen Fehler gefunden  - Lösung folgt baldmöglich */
        for (let i: number = 0; i < n; i++) {

            let b: Bees = new Bees();
            beePositions[i] = b;


            //            console.log("i");
        }


        /* nectarFlowers */
        for (let i: number = 0; i < 4; i++) {
            let nectarFlowers: Blumen = new Blumen();
            blumen[i] = nectarFlowers;
            blumen.push(nectarFlowers);
            console.log(blumen[i]);
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

            console.log(beePositions[i]);
            let b: Bees = beePositions[i];

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