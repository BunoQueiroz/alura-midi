"use strict"

function tocaSom (id) {
    document.querySelector(id).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let n=0; n < listaTeclas.length; n++) {
    const teclaPressionada = listaTeclas[n];
    const classeTecla = teclaPressionada.classList[1];

    const idAudio = `#som_${classeTecla}`;

    teclaPressionada.onclick = function () {
        tocaSom(idAudio);
    }

}