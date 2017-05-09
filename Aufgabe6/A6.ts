namespace StudiVZ {
    interface StudentData {
        matrikelnr: number;
        surname: string;
        forename: string;
        age: number;
        gender: boolean;
        kommentar: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {


        let data: any = _input.split(",");
        let s: StudentData = { matrikelnr: data[0], surname: data[1], forename: data[2], age: data[3], gender: data[4], kommentar: data[5] };

        /* Überprüfung der Werte */

        if (isNaN(parseInt(data[0]))) {
            
            console.log("Matrikelnummer inkorrekt, keine Daten gespeichert.");
          
            return "Bei der angegebenen Matrikelnummer handelt es sich nicht um eine Nummer!";
          
        }
        
        else {

            students.push(s);

            console.log(students);

            return "Ihre Daten wurden erfolgreich gespeichert.";
        }
    }
    
    
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++ ) {
       
            if (students[i].matrikelnr == _matrikel) {
                let gender: string = students[i].gender ? "m" : "w";
                
                return "Es wurden folgende Daten zur Matrikelnummer " + _matrikel + " gefunden:" + "\nName: " + students[i].surname + "\nVorname: " + students[i].forename + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].kommentar;
                }
            
            
        }
            
        return "Es sind keine Daten zur angegebenen Matrikelnummer vorhanden.";
        
        
    }
}