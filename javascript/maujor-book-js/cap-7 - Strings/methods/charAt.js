// chartAt(indice)

// O metodo charAt rtorna o caractere da string que ocupa a posição definida no parametro indice. O primeiro caractere da string ocupa o indice 0 e o ultimo o indice igual a string.length -1

function scharAt() {
    var texto = 'mau%\SR=+t$@ 098mu hjor \\\a';
    var indice = Number(document.form.indice.value);
    if (isFinite(indice) && indice == 0 || indice <= texto.length - 1) {
        document.form.resultado.value = texto.charAt(indice);
    } else {
        alert('Entre um índice válido')
    };
};