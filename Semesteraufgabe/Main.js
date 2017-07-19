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
        imgData = SpookySpook.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function SpawnGhostFirstTime() {
        let startButton = document.getElementById("start");
        let normalghost = new SpookySpook.NormalGhost;
        SpookySpook.appearedGhosts.push(normalghost);
        startButton.disabled = true;
        window.setTimeout(animate, 200);
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
    function animate() {
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
        window.setTimeout(animate, 200);
    }
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=Main.js.map