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
    let imgData;
    let canvas;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        SpookySpook.crc2 = canvas.getContext("2d");
        //        let background: BackgroundDay = new BackgroundDay;
        let background = new SpookySpook.BackgroundNight;
    }
})(SpookySpook || (SpookySpook = {}));
//# sourceMappingURL=Main.js.map