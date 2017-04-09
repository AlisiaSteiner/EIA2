/*
Aufgabe:    Aufgabe 3a
Name:       Alisia Steiner
Matrikel:   254788
Datum:      09.04.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
document.addEventListener("DOMContentLoaded", function () {
    let n = 64;
    let bc;
    let c;
    let koerner = 1;
    let koernerSum = 0;
    let line = 1;
    //    let line: number = 0;
    let div = document.getElementsByTagName("div");
    console.log("test1");
    for (let i = 0; i < n; i++) {
        placeDiv();
        if (i % 8 == 0) {
            div[i].float = "clear both";
            let br = document.createElement("br");
            document.body.appendChild(br);
            console.log("test9");
        }
        /* Farbe */
        if (((i + line) % 2) == 0) {
            div[i].className = "white";
        }
        else {
            div[i].className = "black";
        }
        /* K�rner */
        div.innerText = " " + koernerSum;
        koerner = koerner * 2;
        /* Reihenumbruch/Farbwechsel */
        if (((i + 1) % 8) == 0) {
            line++;
        }
        if (i % 8 == 0) {
            div[i].float = "clear both";
            let br = document.createElement("br");
            console.log("test9");
        }
        /* 3a : Toggle +  Farbänderung */
        //        
        //            for (let z: number = 0; z < 9;z++) {
        //                div.addEventListener("click", function() : void {
        //                    div.className = "selected";
        //                    }
        //                    
        //                    )};
        function placeDiv() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            let s = div.style;
            div.innerText = "" + koerner;
            s.display = "inline-block";
            s.width = "100px";
            s.height = "100px";
        }
    }
});
///////////////////////////////////////////
//# sourceMappingURL=A3a.js.map