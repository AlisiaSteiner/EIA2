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
    class WinningScreen {
        constructor() {
            this.drawScreenAndText();
        }
        drawScreenAndText() {
            SpookySpook.crc2.fillStyle = "#000033";
            SpookySpook.crc2.beginPath();
            SpookySpook.crc2.rect(20, 20, 760, 460);
            SpookySpook.crc2.globalAlpha = 0.8;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.fillStyle = "white";
            SpookySpook.crc2.font = "30px Arial";
            SpookySpook.crc2.textAlign = "center";
            SpookySpook.crc2.fillText("Hey! You have successfully defended the graveyard", SpookySpook.canvas.width / 2, SpookySpook.canvas.height / 2 - 55);
            SpookySpook.crc2.fillText("and saved the souls of the death.", SpookySpook.canvas.width / 2, SpookySpook.canvas.height / 2 - 20);
            SpookySpook.crc2.fillText("The sun is rising and it's time for you, to take a break.", SpookySpook.canvas.width / 2, SpookySpook.canvas.height / 2 + 20);
            SpookySpook.crc2.fillText("See you, little hero!", SpookySpook.canvas.width / 2, SpookySpook.canvas.height / 2 + 55);
        }
    }
    SpookySpook.WinningScreen = WinningScreen;
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=WinningScreen.js.map