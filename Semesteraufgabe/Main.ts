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
    export let explosionArray: number[] = [];





    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");



        let background: BackgroundNight = new BackgroundNight;


        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        startButton.addEventListener("click", SpawnGhostFirstTime);
        startButton.addEventListener("touchstart", SpawnGhostFirstTime);

        let banishButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("banish");
        banishButton.addEventListener("click", DisappearAndExplode);
        banishButton.addEventListener("touchstart", DisappearAndExplode);

        let expelButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("expel");
        expelButton.addEventListener("click", DisappearAndExplode);
        expelButton.addEventListener("touchstart", DisappearAndExplode);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);



    }

    /* Spawning a Ghost for the first time --> Starting Game by click on startButton, this one gets disabled after being clicked once. */
    function SpawnGhostFirstTime(): void {

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        let normalghost: NormalGhost = new NormalGhost;
        appearedGhosts.push(normalghost);

        startButton.disabled = true;
        startButton.style.backgroundColor = "grey";
        window.setTimeout(Animate, 200);
    }

    /* Spawning Ghosts - Random type of ghost */
    function SpawnGhost(): void {

        let i: number = (Math.random() * 10);


        if (i < 3) {
            let angryghost: AngryGhost = new AngryGhost;
            appearedGhosts.push(angryghost);
        }
        else if (i > 2) {
            let normalghost: NormalGhost = new NormalGhost;
            appearedGhosts.push(normalghost);

        }
    }

    /* Animation, movement of the ghosts */
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

    /* First part of disappearing-function, setting Timeout for next part */
    function DisappearAndExplode(): void {

        crc2.putImageData(imgData, 0, 0);

        /*Saving Ghost-Coordinates in Array */
        disappearedGhosts.push(appearedGhosts[0]);
        /*Deleting Ghost out of the array --> not drawn anymore, "banished" */
        appearedGhosts.splice(0, 1);

        window.setTimeout(drawExplosion, 300);

    }

    let n: number = 0;

    /* Creating the explosions when ghost disappears */
    function drawExplosion(): void {

        let randomColor: string = "hsl(" + Math.random() * 350 + ", 100%, 50%)";
        let banishedGhostX: number = (disappearedGhosts[n].x);
        let banishedGhostY: number = (disappearedGhosts[n].y);
        let explosion: Explosion = new Explosion(banishedGhostX, banishedGhostY, randomColor);
        explosionArray.push(1);


        /* Only 2 explosions, after that: Spawn of the Next Ghost (Function StopExplotionAndStartRespawn */
        if (explosionArray.length == 2) {

            window.setTimeout(StopExplotionAndStartRespawn, 800);
        }

        else if (disappearedGhosts.length > 9) {

            
            window.setTimeout(StartEndOfGame, 800);
            
        }

        else {

            window.setTimeout(drawExplosion, 300);

        }


    }

    /* Stop the explotion and set Timeout for the spawning another Ghost */
    function StopExplotionAndStartRespawn(): void {

        explosionArray.splice(0, 2);
        console.log("Geist vertrieben");
        window.setTimeout(SpawnGhost, 200);
        n += 1;

    }

    function StartEndOfGame(): void {
        
        let winningscreen: WinningScreen = new WinningScreen;
        console.log("Spiel gewonnen");
        
        }


}