// Función para limpiar el contenido del textarea
function clearTextarea() {
    document.getElementById('myTextarea').value = '';
}

function encriptarTexto() {
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoEncriptado = "";

    // Recorre el texto original y realiza la encriptación
    for (var i = 0; i < textoOriginal.length; i++) {
        var letra = textoOriginal[i];
        switch (letra) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += letra;
        }
    }

    // Muestra el texto encriptado en el segundo cuadro de texto
    document.getElementById("textoResultado").value = textoEncriptado;
}

function desencriptarTexto() {
    var textoEncriptado = document.getElementById("textoOriginal").value;
    var textoDesencriptado = "";

    // Recorre el texto encriptado y realiza la desencriptación
    for (var i = 0; i < textoEncriptado.length; i += 4) {
        var subcadena = textoEncriptado.substr(i, 4);
        switch (subcadena) {
            case 'ente':
                textoDesencriptado += 'e';
                break;
            case 'imes':
                textoDesencriptado += 'i';
                break;
            case 'ober':
                textoDesencriptado += 'o';
                break;
            case 'ufat':
                textoDesencriptado += 'u';
                break;
            default:
                textoDesencriptado += subcadena;
        }
    }

    // Muestra el texto desencriptado en el segundo cuadro de texto
    document.getElementById("textoResultado").value = textoDesencriptado;
}
