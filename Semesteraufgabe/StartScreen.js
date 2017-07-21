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
    class StartScreen {
        constructor() {
            this.drawScreenAndText();
        }
        drawScreenAndText() {
            SpookySpook.crc2.fillStyle = "black";
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.rect(20, 20, 760, 460);
            SpookySpook.crc2.globalAlpha = 0.8;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.fillStyle = "white";
            SpookySpook.crc2.font = "30px Arial";
            SpookySpook.crc2.textAlign = "center";
            SpookySpook.crc2.fillText("Oh no!! The graveyard is haunted by ghosts!", SpookySpook.canvas.width / 2, SpookySpook.canvas.height / 2 - 55);
            SpookySpook.crc2.fillText("Expel the white ghosts and banish the angry ones", SpookySpook.canvas.width / 2, SpookySpook.canvas.height / 2 - 20);
            SpookySpook.crc2.fillText("to defend the yard through the night!", SpookySpook.canvas.width / 2, SpookySpook.canvas.height / 2 + 20);
            SpookySpook.crc2.fillText("Click START to fight!", SpookySpook.canvas.width / 2, SpookySpook.canvas.height / 2 + 55);
        }
    }
    SpookySpook.StartScreen = StartScreen;
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=StartScreen.js.map