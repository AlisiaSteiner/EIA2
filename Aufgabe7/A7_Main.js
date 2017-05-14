var Aufgabe7;
(function (Aufgabe7) {
    window.addEventListener("load", init);
    let imgData;
    let n = 10;
    let blumen = [];
    let beePositions = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe7.crc2 = canvas.getContext("2d");
        let background = new Aufgabe7.Background;
        /* Random Flowers */
        for (let i = 0; i < 10; i++) {
            let randomFlower = new Aufgabe7.Blumen;
        }
        imgData = Aufgabe7.crc2.getImageData(0, 0, canvas.width, canvas.height);
        /* --> Eben durch Zufall einen Fehler gefunden  - Lösung folgt baldmöglich */
        for (let i = 0; i < n; i++) {
            let b = new Aufgabe7.Bees();
            beePositions[i] = b;
        }
        /* nectarFlowers */
        for (let i = 0; i < 4; i++) {
            let nectarFlowers = new Aufgabe7.Blumen();
            blumen[i] = nectarFlowers;
            blumen.push(nectarFlowers);
            console.log(blumen[i]);
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", drawAnotherBee);
        canvas.addEventListener("touch", drawAnotherBee);
    }
    function drawAnotherBee() {
        console.log("Another Bee went on a flight!");
        let anotherBee = new Aufgabe7.Bees;
        beePositions.push(anotherBee);
        n++;
    }
    function animate() {
        Aufgabe7.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            console.log(beePositions[i]);
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
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=A7_Main.js.map