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
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        SpookySpook.crc2 = canvas.getContext("2d");
        //        let background: BackgroundDay = new BackgroundDay;
        let background = new SpookySpook.BackgroundNight;
        //        let normalghost: NormalGhost = new NormalGhost;
        //        let angryghost: AngryGhost = new AngryGhost    //        
        let startButton = document.getElementById("start");
        startButton.addEventListener("click", SpawnGhostFirstTime);
        startButton.addEventListener("touchstart", SpawnGhostFirstTime);
        let banishButton = document.getElementById("banish");
        banishButton.addEventListener("click", Disappear);
        banishButton.addEventListener("touchstart", Disappear);
        imgData = SpookySpook.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function SpawnGhostFirstTime() {
        let startButton = document.getElementById("start");
        let normalghost = new SpookySpook.NormalGhost;
        SpookySpook.appearedGhosts.push(normalghost);
        startButton.disabled = true;
        window.setTimeout(Animate, 200);
    }
    function SpawnGhost() {
        let i = (Math.random() * 10);
        console.log(i);
        if (i < 3) {
            let angryghost = new SpookySpook.AngryGhost;
            SpookySpook.appearedGhosts.push(angryghost);
        }
        else if (i > 2) {
            let normalghost = new SpookySpook.NormalGhost;
            SpookySpook.appearedGhosts.push(normalghost);
        }
    }
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
    function Disappear() {
        SpookySpook.crc2.putImageData(imgData, 0, 0);
        /*Deleting Ghost out of the array --> not drawn anymore, "banished" */
        SpookySpook.disappearedGhosts.push(SpookySpook.appearedGhosts[0]);
        SpookySpook.appearedGhosts.splice(0, 1);
        disappearCloud();
    }
})(SpookySpook || (SpookySpook = {}));
/* function that creates the Cloud("Explosion") when a Ghost is banished. */
function disappearCloud() {
}
//# sourceMappingURL=Main.js.map