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
    let kontaktdatenArray: string[];
    let versandart: string[];
    
    let artInputs: HTMLInputElement[] = [];
    let sorteInputs: HTMLInputElement[] = [];
    let kugelgrößeInputs: HTMLInputElement[] = [];
    let toppingInputs: HTMLInputElement[] = [];
    let kontaktdatenInputs: HTMLInputElement[] = [];
    let versandartInputs: HTMLInputElement[] = [];

    art = ["Waffel", "Becher"];
    sorte = ["Schokolade", "Vanille", "Stracciatella", "Malaga", "Pistazie", "Erdbeere", "Himbeere", "Zitrone", "Melone", "Grüner Apfel"];
    kugelgröße = ["Normal", "XL"];
    topping = ["Sahne", "Schoko-Soße", "Caramell-Soße", "Schoko-Streusel", "Bunte Streusel", "Smarties", "Oreos", "Banane", "Erdbeeren", "Melone", "Himbeeren", "Heidelbeeren"];
    kontaktdatenArray = ["Name", "Vorname", "Straße", "Hausnummer", "Postleitzahl", "Ort", "Telefonnummer"];
    versandart = ["Standard", "Express"];


    
    
        let fieldSetBestellung: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Bestellung");
        let arten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Art");
        let sorten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Sorten");
        let kugelgrößen: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kugelgrößen");
        let toppings: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Topping");
        let anmerkungen: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Anmerkungen");
        let fieldSetÜbersicht: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Übersicht");
        let kontaktdaten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kontaktdaten");
        let versandarten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Versandart");
        let sendeButton: HTMLElement = document.getElementById("BestellButton");

    

    function init(): void {
        console.log("Init");
        createFieldSetBestellung();
        createFieldSetÜbersicht();

        
        sendeButton.addEventListener("click", bestellungSenden);
        arten.addEventListener("change", change);
        sorten.addEventListener("change", change);
        kugelgrößen.addEventListener("change", change);
        toppings.addEventListener("change", change);
        anmerkungen.addEventListener("change", change);
        versandarten.addEventListener("change", change);   
        
        
        console.log(artInputs);
        console.log("teste");

    }

    /* Bestellungs-FieldSet */
    function createFieldSetBestellung(): void {

        
        let fieldSetBestellung: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Bestellung");
        let arten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Art");
        let sorten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Sorten");
        let kugelgrößen: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kugelgrößen");
        let toppings: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Topping");
        let anmerkungen: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Anmerkungen");
        let fieldSetÜbersicht: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Übersicht");
        /* Schleife für Art */


        for (let i: number = 0; i < art.length; i++) {

            let buttonLabel: HTMLLabelElement = document.createElement("label");

            let eisartenP: HTMLParagraphElement = document.createElement("p");
            eisartenP.textContent = art[i];

            let eisartenInput: HTMLInputElement = document.createElement("input");
            eisartenInput.type = "radio";
            eisartenInput.id = art[i];
            
            eisartenInput.value = "0";
            eisartenInput.name = "Art";

            buttonLabel.appendChild(eisartenP);
            buttonLabel.appendChild(eisartenInput);

            arten.appendChild(buttonLabel);
            
            artInputs.push(eisartenInput);
        }

        /* Schleife für Sorte */


        for (let i: number = 0; i < sorte.length; i++) {


            let eissortenP: HTMLParagraphElement = document.createElement("p");
            eissortenP.textContent = sorte[i];

            let eissortenInput: HTMLInputElement = document.createElement("input");
            eissortenInput.type = "number";
            eissortenInput.id = sorte[i];
            eissortenInput.max = "10";
            eissortenInput.min = "0";
            eissortenInput.value = "0";

            sorten.appendChild(eissortenP);
            sorten.appendChild(eissortenInput);
            sorteInputs.push(eissortenInput);

        }

        /* Schleife für Kugelgröße */

        for (let i: number = 0; i < kugelgröße.length; i++) {

            let buttonLabel: HTMLLabelElement = document.createElement("label");

            let eisgrößenP: HTMLParagraphElement = document.createElement("p");
            eisgrößenP.textContent = kugelgröße[i];

            let eisgrößenInput: HTMLInputElement = document.createElement("input");
            eisgrößenInput.type = "radio";
            eisgrößenInput.id = sorte[i];
            eisgrößenInput.value = "0";
            eisgrößenInput.name = "Kugelgröße";

            buttonLabel.appendChild(eisgrößenP);
            buttonLabel.appendChild(eisgrößenInput);

            kugelgrößen.appendChild(buttonLabel);
            
            kugelgrößeInputs.push(eisgrößenInput);
        }

        /* Schleife für Topping */

        for (let i: number = 0; i < topping.length; i++) {


            let toppingP: HTMLParagraphElement = document.createElement("p");
            toppingP.textContent = topping[i];

            let toppingInput: HTMLInputElement = document.createElement("input");
            toppingInput.type = "number";
            toppingInput.id = sorte[i];
            toppingInput.max = "2";
            toppingInput.min = "0";
            toppingInput.value = "0";

            toppings.appendChild(toppingP);
            toppings.appendChild(toppingInput);

            toppingInputs.push(toppingInput);
        }

        /* Text-Feld für Anmerkungen und Sonderwünsche    */


        let anmerkungenFeld: HTMLTextAreaElement = document.createElement("textarea");
        let umbruch: HTMLElement = document.createElement("br");

        anmerkungenFeld.type = "text";
        anmerkungenFeld.cols = 30;
        anmerkungenFeld.rows = 4;
        anmerkungenFeld.placeholder = "Beschreiben Sie hier Ihre Sonderwünsche....";

        anmerkungen.appendChild(umbruch);
        anmerkungen.appendChild(anmerkungenFeld);

    }




    /* Übersichts-FieldSet */

    function createFieldSetÜbersicht(): void {


        let kontaktdaten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kontaktdaten");
        let versandarten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Versandart");

        /* Schleife für Kontaktdaten */
        for (let i: number = 0; i < kontaktdatenArray.length; i++) {


            let kontaktdatenP: HTMLParagraphElement = document.createElement("p");
            kontaktdatenP.textContent = kontaktdatenArray[i];

            let kontaktdatenInput: HTMLInputElement = document.createElement("input");
            kontaktdatenInput.type = "text";
            kontaktdatenInput.id = kontaktdatenArray[i];


            kontaktdaten.appendChild(kontaktdatenP);
            kontaktdaten.appendChild(kontaktdatenInput);

            kontaktdatenInputs.push(kontaktdatenInput);
        }

        /* Schleife für Versandarten */

        for (let i: number = 0; i < versandart.length; i++) {

            let buttonLabel: HTMLLabelElement = document.createElement("label");

            let versandartP: HTMLParagraphElement = document.createElement("p");
            versandartP.textContent = versandart[i];

            let versandartInput: HTMLInputElement = document.createElement("input");
            versandartInput.type = "radio";
            versandartInput.id = versandart[i];
            versandartInput.value = "0";
            versandartInput.name = "Versandart";

            buttonLabel.appendChild(versandartP);
            buttonLabel.appendChild(versandartInput);

            versandarten.appendChild(buttonLabel);
            
            versandartInputs.push(versandartInput);
        }


    }

    /* Prüfung der Input-Werte: Überprüfung von Postleitzahl, Telefonnummer, Name + sind Art, Versandart, Kugelgröße ausgewählt? */

    function bestellungSenden(): void {

        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
        let straße: HTMLInputElement = <HTMLInputElement>document.getElementById("Straße");
        let hausnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("Hausnummer");
        let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("Postleitzahl");
        let ort: HTMLInputElement = <HTMLInputElement>document.getElementById("Ort");
        let telefonnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("Telefonnummer");

        console.log("Button gedrückt");
        

    }


/* Change Funktion bei Änderung der Werte */
    
    function change(): void {
        
        let summe: number = 0;       
        let bestellübersicht: HTMLElement = document.getElementById("Bestellübersicht");
        bestellübersicht.innerText = "";

        for (let i: number = 0; i < artInputs.length; i++) {
           if (kugelgrößeInputs[i].checked) {
                bestellübersicht.innerText += art[i] + " " + "\n";
            }
               console.log("j");
            }
        
        for (let i: number = 0; i < sorteInputs.length; i++) {
            if (parseInt(sorteInputs[i].value) > 0) {
                bestellübersicht.innerText += sorte[i] + " " + ": " + (parseInt(sorteInputs[i].value) * 1) + "\n";
            }
        }
        for (let i: number = 0; i < kugelgrößeInputs.length; i++) {
            if (kugelgrößeInputs[i].checked) {
                bestellübersicht.innerText += kugelgröße[i] + " " + "\n";
            }
        }
        for (let i: number = 0; i < toppingInputs.length; i++) {
            if (parseInt(toppingInputs[i].value) > 0) {
                bestellübersicht.innerText += topping[i] + " " + ": " + (parseInt(toppingInputs[i].value) * 1) + "\n";
            }
        }
        
        
        
        }


       
}
