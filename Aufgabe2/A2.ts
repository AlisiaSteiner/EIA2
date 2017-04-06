/*
Aufgabe:    Aufgabe 2
Name:       Alisia Steiner
Matrikel:   254788
Datum:      02.04.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/


/*Entschuldigung, den Code werde ich nochmals überarbeiten. Ist etwas durcheinander und chaotisch geworden. Auch funktioniert nicht alles. */

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
            bc = "#ffffff";
            c = "#000000";
        }
        else {
            bc = "#000000";
            c = "#ffffff";
        }

        
         /* Körner */
        
        
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


        function placeDiv(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            let s: CSSStyleDeclaration = div.style;


            div.innerText = "" + koerner;

            s.display = "inline-block";
            s.backgroundColor = bc;
            s.color = c;
            s.width = "100px";
            s.height = "100px";


        }



}

    
    });



///////////////////////////////////////////


