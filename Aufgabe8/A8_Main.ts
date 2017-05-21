/*
Aufgabe:    Aufgabe 8
Name:       Alisia Steiner
Matrikel:   254788
Datum:      18.05.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe8 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let n: number = 10;
   export let blumen: Blumen[] = [];


    let beePositions: Bees[] = [];



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");



        let background: Background = new Background;
        /* Random Flowers */
        for (let i: number = 0; i < 10; i++) {

            let randomX: number = Math.floor(Math.random() * 420 + 20);
            let randomY: number = Math.floor(Math.random() * 250 + 260);

            let flowerType: number = Math.floor(Math.random() * 2);
            if (flowerType == 0) {
                let sunflower: Sunflower = new Sunflower(randomX, randomY);
            }
            else {
                let primrose: Primrose = new Primrose(randomX, randomY);
            }
            
            console.log("Neue Blume gepflanzt");
        }

        /* nectarFlowers */
        for (let i: number = 0; i < 3; i++) {
            
            let randomX: number = Math.floor(Math.random() * 420 + 20);
            let randomY: number = Math.floor(Math.random() * 250 + 260);
            
            let nectarFlowers: Sunflower = new Sunflower(randomX, randomY);
            blumen[i] = nectarFlowers;
            blumen.push(nectarFlowers);

        }
        console.log(blumen);



        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);



        for (let i: number = 0; i < n; i++) {

            let b: NormalBees = new NormalBees();
            beePositions[i] = b;
            let s: SpecialBees = new SpecialBees();
            beePositions[i] = s;
            
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