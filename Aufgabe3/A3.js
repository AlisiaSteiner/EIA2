/*
Aufgabe:    Aufgabe 3
Name:       Alisia Steiner
Matrikel:   254788
Datum:      06.04.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.

Dieser Code wurde in Zusammenarbeit mit Ina Radzuweit und Annkathrin Müller erstellt.
*/
var Aufgabe3;
(function (Aufgabe3) {
    let cards = ["Karo 7",
        "Karo 8",
        "Karo 9",
        "Karo 10",
        "Karo Bube",
        "Karo Dame",
        "Karo König",
        "Karo As",
        "Kreuz 7",
        "Kreuz 8",
        "Kreuz 9",
        "Kreuz 10",
        "Kreuz Bube",
        "Kreuz Dame",
        "Kreuz König",
        "Kreuz As",
        "Herz 7",
        "Herz 8",
        "Herz 9",
        "Herz 10",
        "Herz Bube",
        "Herz Dame",
        "Herz König",
        "Herz As",
        "Pik 7",
        "Pik 8",
        "Pik 9",
        "Pik 10",
        "Pik Bube",
        "Pik Dame",
        "Pik König",
        "Pik As"
    ];
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        /*Aktivität 1 : Click on Deck("Take") --> get max 5 Cards on Hand */
        let take = document.getElementById("take");
        take.addEventListener("click", placeCardToHand);
    }
    /* Funktion zur Platzierung der Karten-Divs im Hand-Div */
    function placeCardToHand() {
        let handDiv = document.getElementById("hand");
        if (handDiv.childElementCount < 5) {
            let div = document.createElement("div");
            document.getElementById("hand").appendChild(div);
            let s = div.style;
            /* Random Card */
            let n = Math.round(Math.random() * (cards.length - 1));
            if (cards[n] == undefined) {
                Math.round(Math.random() * cards.length - 1);
            }
            //        let cardValue: string = cards[n];
            div.innerText = cards[n];
            s.border = "solid black";
            s.display = "inline-block";
            s.width = "200px";
            s.height = "250px";
            div.className = "cardsDrawn";
            console.log(cards[n]);
            console.log(cards.length);
            cards.splice(n, 1);
            div.addEventListener("click", dropCard);
        }
    }
    function dropCard(_event) {
        let target = _event.target;
        let cardValue = target.innerText;
        document.getElementById("drop").innerText = cardValue;
        /* "Delete" Card from hand */
        target.parentNode.removeChild(target);
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=A3.js.map