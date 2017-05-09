var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let data = _input.split(",");
        let s = { matrikelnr: data[0], surname: data[1], forename: data[2], age: data[3], gender: data[4], kommentar: data[5] };
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
    function queryData(_matrikel) {
        return "Hier fehlt noch der richtige Code...";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=A6.js.map