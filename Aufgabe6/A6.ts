namespace StudiVZ {
    interface StudentData {
        matrikelnr: number;
        surname: string;
        forename: string;
        age: number;
        male: boolean;
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
        console.log(data[1]);
//        let s: StudentData = { matrikelnr: data[0], surname: data[1], forename: data[2], age:  0, male: false , kommentar: " " };
 
        students.push(data);
        
        console.log(students);
        
        /* Überprüfung fehlt */
  
        
        
        
        
        return "Hier fehlt noch der richtige Code...";
    }
    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
    }
}