/*
Aufgabe:    Aufgabe 9
Name:       Alisia Steiner
Matrikel:   254788
Datum:      31.05.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let art;
    let sorte;
    let kugelgröße;
    let topping;
    art = ["Waffel", "Becher"];
    sorte = ["Schokolade", "Vanille", "Stracciatella", "Malaga", "Pistazie", "Erdbeere", "Himbeere", "Zitrone", "Melone", "Grüner Apfel"];
    kugelgröße = ["Normal", "XL"];
    topping = ["Sahne", "Schoko-Soße", "Caramell-Soße", "Schoko-Streusel", "Bunte Streusel", "Smarties", "Oreos", "Banane", "Erdbeeren", "Melone", "Himbeeren", "Heidelbeeren"];
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        let fieldSetBestellung = document.getElementById("Bestellung");
        /* Schleife für Art */
        for (let i = 0; i < sorte.length; i++) {
            let wrapperDiv = document.createElement("div");
            let eissortenP = document.createElement("p");
            eissortenP.textContent = sorte[i];
            let eissortenInput = document.createElement("input");
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
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=A9.js.map