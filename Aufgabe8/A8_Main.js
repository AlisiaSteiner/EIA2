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
    Aufgabe8.blumen = [];
    let beePositions = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe8.crc2 = canvas.getContext("2d");
        let background = new Aufgabe8.Background;
        /* Random Flowers */
        for (let i = 0; i < 10; i++) {
            let randomX = Math.floor(Math.random() * 420 + 20);
            let randomY = Math.floor(Math.random() * 250 + 260);
            let flowerType = Math.floor(Math.random() * 2);
            if (flowerType == 0) {
                let sunflower = new Aufgabe8.Sunflower(randomX, randomY);
            }
            else {
                let primrose = new Aufgabe8.Primrose(randomX, randomY);
                primrose.draw();
            }
            console.log("Neue Blume gepflanzt");
        }
        /* nectarFlowers */
        for (let i = 0; i < 3; i++) {
            let randomX = Math.floor(Math.random() * 420 + 20);
            let randomY = Math.floor(Math.random() * 250 + 260);
            let nectarFlowers = new Aufgabe8.Sunflower(randomX, randomY);
            nectarFlowers.draw();
            Aufgabe8.blumen[i] = nectarFlowers;
            Aufgabe8.blumen.push(nectarFlowers);
            console.log("Nectar-Flower gepflanzt");
        }
        console.log(Aufgabe8.blumen);
        imgData = Aufgabe8.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //        for (let i: number = 0; i < n; i++) {
        //
        //            let b: NormalBees = new NormalBees(665, 345, "black", "white");
        //            beePositions[i] = b;
        //            b.draw();
        ////            let s: SpecialBees = new SpecialBees();
        ////            bees[i] = s;
        //            
        //     
        //       }
        //        window.setTimeout(animate, 30);
        canvas.addEventListener("click", drawAnotherBee);
        canvas.addEventListener("touch", drawAnotherBee);
    }
    function drawAnotherBee() {
        console.log("Another Bee went on a flight!");
        let anotherBee = new Aufgabe8.Bees;
        beePositions.push(anotherBee);
        n++;
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=A8_Main.js.map