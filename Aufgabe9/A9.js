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
    let kontaktdatenArray;
    art = ["Waffel", "Becher"];
    sorte = ["Schokolade", "Vanille", "Stracciatella", "Malaga", "Pistazie", "Erdbeere", "Himbeere", "Zitrone", "Melone", "Grüner Apfel"];
    kugelgröße = ["Normal", "XL"];
    topping = ["Sahne", "Schoko-Soße", "Caramell-Soße", "Schoko-Streusel", "Bunte Streusel", "Smarties", "Oreos", "Banane", "Erdbeeren", "Melone", "Himbeeren", "Heidelbeeren"];
    kontaktdatenArray = ["Name", "Vorname", "Straße", "Hausnummer", "Postleitzahl", "Ort", "Telefonnummer"];
    function init(_event) {
        console.log("Init");
        createFieldSetBestellung();
        createFieldSetÜbersicht();
    }
    /* Bestellungs-FieldSet */
    function createFieldSetBestellung() {
        let fieldSetBestellung = document.getElementById("Bestellung");
        let arten = document.getElementById("Art");
        let sorten = document.getElementById("Sorten");
        let kugelgrößen = document.getElementById("Kugelgrößen");
        let toppings = document.getElementById("Topping");
        let anmerkungen = document.getElementById("Anmerkungen");
        let fieldSetÜbersicht = document.getElementById("Übersicht");
        /* Schleife für Art */
        for (let i = 0; i < art.length; i++) {
            let buttonLabel = document.createElement("label");
            let eisartenP = document.createElement("p");
            eisartenP.textContent = art[i];
            let eisartenInput = document.createElement("input");
            eisartenInput.type = "radio";
            eisartenInput.id = sorte[i];
            eisartenInput.value = "0";
            eisartenInput.name = "Eisart";
            buttonLabel.appendChild(eisartenP);
            buttonLabel.appendChild(eisartenInput);
            arten.appendChild(buttonLabel);
        }
        /* Schleife für Sorte */
        for (let i = 0; i < sorte.length; i++) {
            let eissortenP = document.createElement("p");
            eissortenP.textContent = sorte[i];
            let eissortenInput = document.createElement("input");
            eissortenInput.type = "number";
            eissortenInput.id = sorte[i];
            eissortenInput.max = "10";
            eissortenInput.min = "0";
            eissortenInput.value = "0";
            sorten.appendChild(eissortenP);
            sorten.appendChild(eissortenInput);
        }
        /* Schleife für Kugelgröße */
        for (let i = 0; i < kugelgröße.length; i++) {
            let buttonLabel = document.createElement("label");
            let eisgrößenP = document.createElement("p");
            eisgrößenP.textContent = kugelgröße[i];
            let eisgrößenInput = document.createElement("input");
            eisgrößenInput.type = "radio";
            eisgrößenInput.id = sorte[i];
            eisgrößenInput.value = "0";
            eisgrößenInput.name = "Kugelgröße";
            buttonLabel.appendChild(eisgrößenP);
            buttonLabel.appendChild(eisgrößenInput);
            kugelgrößen.appendChild(buttonLabel);
        }
        /* Schleife für Topping */
        for (let i = 0; i < topping.length; i++) {
            let toppingP = document.createElement("p");
            toppingP.textContent = topping[i];
            let toppingInput = document.createElement("input");
            toppingInput.type = "number";
            toppingInput.id = sorte[i];
            toppingInput.max = "2";
            toppingInput.min = "0";
            toppingInput.value = "0";
            toppings.appendChild(toppingP);
            toppings.appendChild(toppingInput);
        }
        /* Text-Feld für Anmerkungen und Sonderwünsche    */
        let anmerkungenFeld = document.createElement("textarea");
        let umbruch = document.createElement("br");
        anmerkungenFeld.type = "text";
        anmerkungenFeld.cols = 30;
        anmerkungenFeld.rows = 4;
        anmerkungenFeld.placeholder = "Beschreiben Sie hier Ihre Sonderwünsche....";
        anmerkungen.appendChild(umbruch);
        anmerkungen.appendChild(anmerkungenFeld);
    }
    /* Übersichts-FieldSet */
    function createFieldSetÜbersicht() {
        let kontaktdaten = document.getElementById("Kontaktdaten");
        for (let i = 0; i < kontaktdatenArray.length; i++) {
            let kontaktdatenP = document.createElement("p");
            kontaktdatenP.textContent = kontaktdatenArray[i];
            let kontaktdatenInput = document.createElement("input");
            kontaktdatenInput.type = "text";
            kontaktdatenInput.id = kontaktdatenArray[i];
            kontaktdaten.appendChild(kontaktdatenP);
            kontaktdaten.appendChild(kontaktdatenInput);
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=A9.js.map