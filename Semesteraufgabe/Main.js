/*
Aufgabe:    Semesteraufgabe
Name:       Alisia Steiner
Matrikel:   254788
Datum:      21.07.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var SpookySpook;
(function (SpookySpook) {
    window.addEventListener("load", init);
    let canvas;
    let imgData;
    SpookySpook.appearedGhosts = [];
    SpookySpook.disappearedGhosts = [];
    SpookySpook.explosionArray = [];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        SpookySpook.crc2 = canvas.getContext("2d");
        let background = new SpookySpook.BackgroundNight;
        let startButton = document.getElementById("start");
        startButton.addEventListener("click", SpawnGhostFirstTime);
        startButton.addEventListener("touchstart", SpawnGhostFirstTime);
        let banishButton = document.getElementById("banish");
        banishButton.addEventListener("click", DisappearAndExplode);
        banishButton.addEventListener("touchstart", DisappearAndExplode);
        let expelButton = document.getElementById("expel");
        expelButton.addEventListener("click", DisappearAndExplode);
        expelButton.addEventListener("touchstart", DisappearAndExplode);
        imgData = SpookySpook.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    /* Spawning a Ghost for the first time --> Starting Game by click on startButton, this one gets disabled after being clicked once. */
    function SpawnGhostFirstTime() {
        let startButton = document.getElementById("start");
        let normalghost = new SpookySpook.NormalGhost;
        SpookySpook.appearedGhosts.push(normalghost);
        startButton.disabled = true;
        startButton.style.backgroundColor = "grey";
        window.setTimeout(Animate, 200);
    }
    /* Spawning Ghosts - Random type of ghost */
    function SpawnGhost() {
        let i = (Math.random() * 10);
        if (i < 3) {
            let angryghost = new SpookySpook.AngryGhost;
            SpookySpook.appearedGhosts.push(angryghost);
        }
        else if (i > 2) {
            let normalghost = new SpookySpook.NormalGhost;
            SpookySpook.appearedGhosts.push(normalghost);
        }
    }
    /* Animation, movement of the ghosts */
    function Animate() {
        SpookySpook.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < SpookySpook.appearedGhosts.length; i++) {
            let g = SpookySpook.appearedGhosts[i];
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
    function DisappearAndExplode() {
        SpookySpook.crc2.putImageData(imgData, 0, 0);
        /*Saving Ghost-Coordinates in Array */
        SpookySpook.disappearedGhosts.push(SpookySpook.appearedGhosts[0]);
        /*Deleting Ghost out of the array --> not drawn anymore, "banished" */
        SpookySpook.appearedGhosts.splice(0, 1);
        window.setTimeout(drawExplosion, 300);
    }
    let n = 0;
    /* Creating the explosions when ghost disappears */
    function drawExplosion() {
        let randomColor = "hsl(" + Math.random() * 350 + ", 100%, 50%)";
        let banishedGhostX = (SpookySpook.disappearedGhosts[n].x);
        let banishedGhostY = (SpookySpook.disappearedGhosts[n].y);
        let explosion = new SpookySpook.Explosion(banishedGhostX, banishedGhostY, randomColor);
        SpookySpook.explosionArray.push(1);
        /* Only 2 explosions, after that: Spawn of the Next Ghost (Function StopExplotionAndStartRespawn */
        if (SpookySpook.explosionArray.length == 2) {
            window.setTimeout(StopExplotionAndStartRespawn, 800);
        }
        else if (SpookySpook.disappearedGhosts.length > 9) {
            window.setTimeout(StartEndOfGame, 800);
        }
        else {
            window.setTimeout(drawExplosion, 300);
        }
    }
    /* Stop the explotion and set Timeout for the spawning another Ghost */
    function StopExplotionAndStartRespawn() {
        SpookySpook.explosionArray.splice(0, 2);
        console.log("Geist vertrieben");
        window.setTimeout(SpawnGhost, 200);
        n += 1;
    }
    function StartEndOfGame() {
        let winningscreen = new SpookySpook.WinningScreen;
        console.log("Spiel gewonnen");
    }
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=Main.js.map