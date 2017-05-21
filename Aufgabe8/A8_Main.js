/*
Aufgabe:    Aufgabe 8
Name:       Alisia Steiner
Matrikel:   254788
Datum:      18.05.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    let imgData;
    let n = 10;
    let blumen = [];
    let beePositions = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe8.crc2 = canvas.getContext("2d");
        let background = new Aufgabe8.Background;
        /* Random Flowers */
        for (let i = 0; i < 10; i++) {
            let randomFlower = new Aufgabe8.Blumen;
        }
        /* nectarFlowers */
        for (let i = 0; i < 3; i++) {
            let nectarFlowers = new Aufgabe8.Blumen();
            blumen[i] = nectarFlowers;
            blumen.push(nectarFlowers);
        }
        console.log(blumen);
        imgData = Aufgabe8.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < n; i++) {
            let b = new Aufgabe8.Bees();
            beePositions[i] = b;
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", drawAnotherBee);
        canvas.addEventListener("touch", drawAnotherBee);
    }
    function drawAnotherBee() {
        console.log("Another Bee went on a flight!");
        let anotherBee = new Aufgabe8.Bees;
        beePositions.push(anotherBee);
        n++;
    }
    function animate() {
        Aufgabe8.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            let b = beePositions[i];
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
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=A8_Main.js.map