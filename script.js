
function encryptMessage() { 

    var texto = document.getElementById("txt_in").value.toLowerCase();
    let resultEncript = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById('txt_out').innerHTML = resultEncript;
}

function decriptMessage() {

    var texto = document.getElementById("txt_in").value.toLowerCase();
    let resultDecript = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('txt_out').innerHTML = resultDecript;
    
}

function copyMessage(){
    
    let texto = document.getElementById("txt_out").value;
    navigator.clipboard.writeText(texto);
    
}
