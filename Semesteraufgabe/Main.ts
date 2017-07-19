/*
Aufgabe:    Semesteraufgabe
Name:       Alisia Steiner
Matrikel:   254788
Datum:      21.07.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace SpookySpook {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    let imgData: ImageData;

    export let appearedGhosts: Ghost[] = [];
    export let disappearedGhosts: Ghost[] = [];





    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");


        //        let background: BackgroundDay = new BackgroundDay;
        let background: BackgroundNight = new BackgroundNight;

        //        let normalghost: NormalGhost = new NormalGhost;
        //        let angryghost: AngryGhost = new AngryGhost    //        


        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        startButton.addEventListener("click", SpawnGhostFirstTime);
        startButton.addEventListener("touchstart", SpawnGhostFirstTime);

        let banishButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("banish");
        banishButton.addEventListener("click", Disappear);
        banishButton.addEventListener("touchstart", Disappear);


        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);






    }


    function SpawnGhostFirstTime(): void {

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        let normalghost: NormalGhost = new NormalGhost;
        appearedGhosts.push(normalghost);

        startButton.disabled = true;
        window.setTimeout(Animate, 200);
    }


    function SpawnGhost(): void {

        let i: number = (Math.random() * 10);
        console.log(i);

        if (i < 3) {
            let angryghost: AngryGhost = new AngryGhost;
            appearedGhosts.push(angryghost);
        }
        else if (i > 2) {
            let normalghost: NormalGhost = new NormalGhost;
            appearedGhosts.push(normalghost);

        }
    }

    function Animate(): void {

        crc2.putImageData(imgData, 0, 0);


        for (let i: number = 0; i < appearedGhosts.length; i++) {

            let g: Ghost = appearedGhosts[i];

            if (g.x > 801) {
                g.x = 0;
            }
            if (g.x < 0) {
                g.x = 800;
            }
            if (g.y > 500) {
                g.y = 0;
            }
            if (g.y < 0) {
                g.y = 500;
            }
            g.update();

        }

        window.setTimeout(Animate, 200);
    }

    function Disappear(): void {

        crc2.putImageData(imgData, 0, 0);
        /*Deleting Ghost out of the array --> not drawn anymore, "banished" */
        disappearedGhosts.push(appearedGhosts[0]);        
        appearedGhosts.splice(0, 1);
        Ghost.this.disappear();


    }






}