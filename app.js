const input = document.querySelector("#input-text");
let output = document.querySelector("#output-text");
const btnEncript = document.querySelector("#btn-encript");
const btnDecript = document.querySelector("#btn-decript");
const btnCopy = document.querySelector("#btn-copy");
btnEncript.onclick = encriptarTexto;
btnDecript.onclick = desencriptarTexto;
btnCopy.onclick = copiar;

//Encriptar Texto
function encriptarTexto() {
  validarInput();
  if (!valido) {
    alert('Por favor no uses caracteres especiales ni mayusculas')
    location.reload(); //Recargar la página
  } else {
    let text = input.value;
    let letraModificada = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    return output.value = letraModificada;
  }
}

//Desencriptar Texto
function desencriptarTexto() {
  validarInput();
  let text = input.value;
  if (!valido) {
    alert('Por favor no uses caracteres especiales ni mayusculas')
    location.reload(); //Recargar la página
  } else {
    let letraModificada = text
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    return output.value = letraModificada;
  }
}

//Copiar Texto
function copiar() {
  let copyText = output;
  copyText.select();
  document.execCommand("copy");
}

//validar Texto
let valido = true;

function validarInput() {
  const regexp = /^[a-z0-9 ]+$/;
  if (!regexp.test(input.value)) {
    valido = false;
    input.value = "";

  }
}



