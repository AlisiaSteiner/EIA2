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

document.addEventListener("DOMContentLoaded", function () {
    
    let n: number = 64;
    let koerner: number = 1;
    koerner = koerner * 2;
    let bc: string;
    let c: string;
    let line: number = 0;
    let divs: any = document.getElementsByTagName("div");
    
    
    console.log("test1");
    
    for (let i: number = 0; i < n; i++) {
                                               
        
        
            if (i % 8 == 0) {
//                divs[i].float = "clear both"; 
              line++;
             console.log("test9");
               
                };
        
                                    /* Farbe */
        if (i % 2 == 0 ) { 
        bc = "#ffffff";
        c = "#000000";    
         }
        else { 
        bc = "#000000"; 
        c = "#ffffff"; 
        }     
           
        console.log("test2");
        
        placeDiv() ;    console.log("test3");

       
        console.log("test4");
        
                                    /* Reihenumbruch/Farbwechsel */
        
            if (i % 2 == 0) {
                divs[i].float = "right";
                }
        
            else {
                divs[i].float = "left";
                 }
        
       
        
           
        
        
                                   
                 
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
   
    
};
   
    
              
    

    });        

        
 