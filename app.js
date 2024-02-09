// Función para limpiar el contenido del textarea
function clearTextarea() {
    document.getElementById('textoOriginal').value = '';
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
    var textoDesencriptado = textoEncriptado.replace(/enter/g, 'e')
                                            .replace(/imes/g, 'i')
                                            .replace(/ai/g, 'a')
                                            .replace(/ober/g, 'o')
                                            .replace(/ufat/g, 'u');

    // Muestra el texto desencriptado en el segundo cuadro de texto
    document.getElementById("textoResultado").value = textoDesencriptado;
}
