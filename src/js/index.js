const tela = document.querySelector (".tela");
const btnPadrao = document.querySelectorAll (".btnPadrao");
const btnAC = document.querySelector (".btnAC");
const btnDEL = document.querySelector (".btnDEL");
const btnMaisMenos = document.querySelector (".btnMais-Menos");
const btnIgual = document.querySelector (".btnIgual");

function gerenciarOuvintes () {
    btnPadrao.forEach(digito => {
        digito.addEventListener ("click", () => {
            const valorDoElementoClicado = digito.dataset.valor;
            inserirValorNaTela (valorDoElementoClicado)
        })
    });

    btnAC.addEventListener ("click", () => {
        limpaTela ();
    })
    
    btnDEL.addEventListener ("click", () => {
        apagaUltimoDigito ();
    })
    
    btnMaisMenos.addEventListener ("click", () => {
        trocarSinalDaConta ();
    })
    
    btnIgual.addEventListener ("click", () => {
        resultadoDaConta ();
    })
}

function inserirValorNaTela (numeroDigitado) {
    const ultimoValorDigitado = tela.value[tela.value.length -1];

    if (ultimoValorDigitado && !Number(ultimoValorDigitado) && 
    !Number(numeroDigitado) && ultimoValorDigitado != 0 && numeroDigitado != 0) {
        apagaUltimoDigito ();
    }  

    if (tela.value.length == 0 && !Number(numeroDigitado)) {
        return;
    }

    tela.value += numeroDigitado;
}

function limpaTela () {
    tela.value = "";
}

function apagaUltimoDigito () {
    tela.value = tela.value.slice (0,-1);
}

function trocarSinalDaConta () {
    if (Number(tela.value)) {
        tela.value = (tela.value*-1);
    }
}

function resultadoDaConta () {
    try {
        tela.value =eval(tela.value)
    } catch {
        tela.value = tela.textContent = ("operação errada");
    }
}


gerenciarOuvintes ();