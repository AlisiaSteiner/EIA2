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
            SpookySpook.crc2.globalAlpha = 0.7;
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
        }
    }
    SpookySpook.WinningScreen = WinningScreen;
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=WinningScreen.js.map