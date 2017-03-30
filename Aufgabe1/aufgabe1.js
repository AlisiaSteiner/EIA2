/*
Aufgabe:    Aufgabe 1
Name:       Alisia Steiner
Matrikel:   254788
Datum:      26.03.2017

Code von Prof. Dell'Oro-Friedl
*/
document.addEventListener('DOMContentLoaded', function () {
    let n = 5;
    let c;
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
        y += (i == 2) ? 20 : 50;
        x = (x + 170) % 400;
        switch (i) {
            case 0:
                c = "#ff0000";
                break;
            case 1:
            case 4:
                c = "#00ff00";
                break;
            case 3:
                continue;
            default:
                c = "#0000ff";
        }
        for (let a = 50; a > 0; a -= 20) {
            placeDiv(c, x, y, a, a);
            if (i == 4)
                break;
        }
    }
    function placeDiv(_color, _x, _y, _width, _height) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.borderStyle = "solid";
        s.borderColor = "#000000";
        s.borderWidth = "1px";
        s.position = "absolute";
        s.display = "inline-block";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
});
//# sourceMappingURL=aufgabe1.js.map