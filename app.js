const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function removeBackground() {
    const textarea = document.getElementById('textAreaWithImage');
    textarea.style.backgroundImage = 'none';
}

// function campoVazio() {
//     const textarea = document.getElementById('textAreaWithImage');
//     textarea.value = "Por favor, digite o texto !";
// }

// function voltaBackground() {
//     textarea.backgroundImage = "url('/imagens/procura.png')";
// }

//não recebe parâmetro pois é apenas um procedimento
function btnEncriptar () {
    
    if (textArea.value == "") {
        // mensagem.value = "Digite seu texto, por favor.";
        // voltaBackground();
        location.reload();
    }
    else {
        const textoEncriptado = encriptar(textArea.value);
        mensagem.value = textoEncriptado;
        textArea.value = "";
        removeBackground();
    }
    
}


function encriptar(stringencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringencriptada = stringencriptada.toLowerCase(); 
    // console.table(matrixCodigo);

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringencriptada.includes(matrizCodigo[i][0])) {
            stringencriptada = stringencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringencriptada;
}

function btnDesencriptar () {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    textoCopiado = mensagem.value;
    textArea.value = textoCopiado;
    mensagem.value = "";
    // voltaBackground();
}
