"use strict"

function tocaSom (id) {
    return document.querySelector(id).play();
}

function showEvent (event) {
    return console.log(event.code);
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let n=0; n < listaTeclas.length; n++) {
    const teclaPressionada = listaTeclas[n];
    const classeTecla = teclaPressionada.classList[1];

    const idAudio = `#som_${classeTecla}`;

    teclaPressionada.onclick = function () {
        tocaSom(idAudio);
    }

    teclaPressionada.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            teclaPressionada.classList.add('ativa');
        }
    }

    teclaPressionada.onkeyup = function () {
        teclaPressionada.classList.remove('ativa');
    }
}
