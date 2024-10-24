function transformarTexto() {
    const textoInput = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');
    const radios = document.getElementsByName('transformacao');

    if (radios[0].checked) {
        resultado.textContent = textoInput.toUpperCase();
    } else if (radios[1].checked) {
        resultado.textContent = textoInput.toLowerCase();
    }
}
