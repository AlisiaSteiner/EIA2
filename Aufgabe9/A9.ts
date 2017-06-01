/*
Aufgabe:    Aufgabe 9
Name:       Alisia Steiner
Matrikel:   254788
Datum:      31.05.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/



namespace Aufgabe9 {

    window.addEventListener("load", init);

    let art: string[];
    let sorte: string[];
    let kugelgröße: string[];
    let topping: string[];


    art = ["Waffel", "Becher"];
    sorte = [ "Schokolade", "Vanille", "Stracciatella", "Malaga", "Pistazie", "Erdbeere", "Himbeere", "Zitrone", "Melone", "Grüner Apfel"];
    kugelgröße = ["Normal", "XL"];
    topping = ["Sahne", "Schoko-Soße", "Caramell-Soße", "Schoko-Streusel", "Bunte Streusel", "Smarties", "Oreos", "Banane", "Erdbeeren", "Melone", "Himbeeren", "Heidelbeeren"];
    

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        let fieldSetBestellung: HTMLFieldSetElement = <HTMLFieldSetElement> document.getElementById("Bestellung");
        /* Schleife für Art */
        for(let i: number = 0; i < sorte.length; i++ ) {
            let wrapperDiv: HTMLDivElement = document.createElement("div");
            
            let eissortenP: HTMLParagraphElement = document.createElement("p");
            eissortenP.textContent = sorte[i];
            
            let eissortenInput: HTMLInputElement = document.createElement("input");
            eissortenInput.type = "number";
            eissortenInput.id = sorte[i];
            eissortenInput.className = "styleName";
            eissortenInput.max = "10";
            eissortenInput.min = "0";
            eissortenInput.value = "0";
            
            wrapperDiv.appendChild(eissortenP);
            wrapperDiv.appendChild(eissortenInput);
            
            fieldSetBestellung.appendChild(wrapperDiv);
            
            }
        
        
    }





}
