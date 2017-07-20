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
    class Explosion {
        constructor(_x, _y, _color) {
            this.draw(_x, _y, _color);
        }
        draw(_x, _y, _color) {
            SpookySpook.crc2.fillStyle = _color;
            SpookySpook.crc2.strokeStyle = _color;
            SpookySpook.crc2.moveTo(_x, _y);
            SpookySpook.crc2.arc(_x + 20, _y + 10, 60, 0, 2 * Math.PI);
            SpookySpook.crc2.arc(_x + 30, _y + 30, 60, 0, 2 * Math.PI);
            SpookySpook.crc2.arc(_x + 90, _y + 30, 60, 0, 2 * Math.PI);
            SpookySpook.crc2.arc(_x + 70, _y - 20, 60, 0, 2 * Math.PI);
            SpookySpook.crc2.arc(_x + 110, _y, 60, 0, 2 * Math.PI);
            SpookySpook.crc2.closePath();
            SpookySpook.crc2.fill();
            SpookySpook.crc2.stroke();
        }
    }
    SpookySpook.Explosion = Explosion;
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=Explosion.js.map