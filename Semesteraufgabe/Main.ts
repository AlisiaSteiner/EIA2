/*
Aufgabe:    Semesteraufgabe
Name:       Alisia Steiner
Matrikel:   254788
Datum:      21.07.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace SpookySpook {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    let canvas: HTMLCanvasElement;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");


//        let background: BackgroundDay = new BackgroundDay;
        let background: BackgroundNight = new BackgroundNight;

    }





}