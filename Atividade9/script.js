// =======================================================
// AS 4 FUNÇÕES PRINCIPAIS DA ATIVIDADE
// (Já estão na forma mais simples possível em JS)
// =======================================================

function maiorDeTres(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

function ordenarCrescente(n1, n2, n3) {
    const numeros = [n1, n2, n3];
    // Função de comparação para ordenação numérica
    numeros.sort((a, b) => a - b); 
    return numeros;
}

function ehPalindromo(texto) {
    let strLimpa = texto.toUpperCase().replace(/[^A-Z0-9]/g, '');
    let strInvertida = strLimpa.split('').reverse().join('');
    return strLimpa === strInvertida;
}

function tipoTriangulo(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não formam um triângulo.";
    }
    if (a === b && b === c) {
        return "Formam um triângulo Equilátero.";
    }
    if (a === b || a === c || b === c) {
        return "Formam um triângulo Isósceles.";
    }
    return "Formam um triângulo Escaleno.";
}


// =======================================================
// FUNÇÕES AUXILIARES DE INTERAÇÃO COM O HTML (DOM)
// (Simplificadas ao máximo, sem muitas verificações)
// =======================================================

function getValor(id) {
    // Retorna o valor de um input. Usado para números (parseFloat) ou texto (value).
    return document.getElementById(id).value;
}

function exibirResultado(id, texto, cor) {
    const elemento = document.getElementById(id);
    elemento.textContent = texto;
    if (cor) elemento.style.color = cor;
}

// 1. Execução do Maior de Três
function encontrarMaior() {
    const n1 = parseFloat(getValor('num1_maior'));
    const n2 = parseFloat(getValor('num2_maior'));
    const n3 = parseFloat(getValor('num3_maior'));
    
    // Supondo entradas válidas e ignorando erros.
    const maior = maiorDeTres(n1, n2, n3);
    exibirResultado('resultado_maior', maior, '#dc3545'); // Cor vermelha (ou a cor padrão do CSS)
}

// 2. Execução da Ordenação
function ordenarNumeros() {
    const n1 = parseFloat(getValor('num1_ordenar'));
    const n2 = parseFloat(getValor('num2_ordenar'));
    const n3 = parseFloat(getValor('num3_ordenar'));
    
    // Supondo entradas válidas e ignorando erros.
    const ordenados = ordenarCrescente(n1, n2, n3).join(', ');
    exibirResultado('resultado_ordenar', ordenados, '#dc3545');
}

// 3. Execução do Palíndromo
function verificarPalindromo() {
    const palavra = getValor('palavra_palindromo');
    
    // Supondo entradas válidas e ignorando erros.
    const resultado = ehPalindromo(palavra);
    const msg = resultado 
        ? `"${palavra.toUpperCase()}" é um palíndromo.` 
        : `"${palavra.toUpperCase()}" não é um palíndromo.`;
        
    const cor = resultado ? "#28a745" : "#dc3545"; // Verde ou Vermelho
    exibirResultado('resultado_palindromo', msg, cor);
}

// 4. Execução do Triângulo
function analisarTriangulo() {
    const a = parseFloat(getValor('ladoA_triangulo'));
    const b = parseFloat(getValor('ladoB_triangulo'));
    const c = parseFloat(getValor('ladoC_triangulo'));
    
    // Supondo entradas válidas e ignorando erros.
    const resultado = tipoTriangulo(a, b, c);
    
    const cor = resultado.includes("Não formam") ? "#dc3545" : "#28a745"; // Vermelho ou Verde
    exibirResultado('resultado_triangulo', resultado, cor);
}