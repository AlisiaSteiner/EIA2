/*
Aufgabe:    Aufgabe 2
Name:       Alisia Steiner
Matrikel:   254788
Datum:      02.04.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
/*Entschuldigung, den Code werde ich nochmals �berarbeiten. Ist etwas durcheinander und chaotisch geworden. Auch funktioniert nicht alles. */
document.addEventListener("DOMContentLoaded", function () {
    let n = 64;
    let koerner = 1;
    let bc;
    let c;
    let reihe = 1;
    let div = document.getElementsByTagName("div");
    console.log("test1");
    for (let i = 0; i < n; i++) {
        /* Farbe */
        if (i % 2 == 0) {
            bc = "#ffffff";
            c = "#000000";
        }
        else {
            bc = "#000000";
            c = "#ffffff";
        }
        console.log("test2");
        placeDiv();
        console.log("test3");
        placeKoerner();
        console.log("test4");
        /* Reihenumbruch/Farbwechsel */
        if (i % 2 == 0) {
            div.float = "right";
        }
        else {
            div.float = "left";
        }
        if (i % 8 == 0) {
            div.float = "clear both";
            let br = document.createElement("br");
            console.log("test9");
        }
        ;
    }
    function placeDiv() {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.display = "inline-block";
        s.backgroundColor = bc;
        s.color = c;
        s.width = "100px";
        s.height = "100px";
    }
    ;
    function placeKoerner() {
        div.innerText = koerner;
    }
    ;
});
//# sourceMappingURL=A2.js.map