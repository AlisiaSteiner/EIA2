var Aufgabe7;
(function (Aufgabe7) {
    window.addEventListener("load", init);
    let imgData;
    let n = 10;
    let beePositions = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe7.crc2 = canvas.getContext("2d");
        imgData = Aufgabe7.crc2.getImageData(0, 0, canvas.width, canvas.height);
        let background = new Aufgabe7.Background;
        let flowers = new Aufgabe7.Blumen;
        for (let i = 0; i < n; i++) {
            let b = new Aufgabe7.Bees;
            console.log(i);
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
            let b = beePositions[i];
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
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=A7_Main.js.map