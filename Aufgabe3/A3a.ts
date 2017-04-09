/*
Aufgabe:    Aufgabe 3a  
Name:       Alisia Steiner
Matrikel:   254788
Datum:      09.04.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

document.addEventListener("DOMContentLoaded", function(): void {

    let n: number = 64;
    let bc: string;
    let c: string;
    let koerner: number = 1;
    let koernerSum: number = 0;
    let line: number = 1;
    //    let line: number = 0;
    let div: any = document.getElementsByTagName("div");


    console.log("test1");

    for (let i: number = 0; i < n; i++) {

        placeDiv();

        if (i % 8 == 0) {
            div[i].float = "clear both";
            let br: HTMLElement = document.createElement("br");
            document.body.appendChild(br);

            console.log("test9");

        }

        /* Farbe */
        if (((i + line) % 2) == 0) {
            c = "white";
        }
        else {
            c = "black";
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
            let br: HTMLElement = document.createElement("br");


            console.log("test9");

        }

        /* 3a : Toggle +  Farbänderung */
        //        
        //            for (let z: number = 0; z < 9;z++) {
        //                div.addEventListener("click", function() : void {
        //                    div.className = "selected";
        //                       

        
        function placeDiv(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            let s: CSSStyleDeclaration = div.style;


            div.innerText = "" + koerner;

            s.display = "inline-block";
            s.width = "150px";
            s.height = "150px";
            div.className = c;
        }



    }


});



///////////////////////////////////////////


