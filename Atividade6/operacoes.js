function calcularOperacoes() {
    // Pergunta os dois números e transforma eles em números de verdade
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    // calculo
    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;
    let resto = numero1 % numero2;
    // resultados
    alert("Aqui estão os resultados:\n" +
          "Soma: " + soma + "\n" +
          "Subtração: " + subtracao + "\n" +
          "Multiplicação: " + multiplicacao + "\n" +
          "Divisão: " + divisao + "\n" +
          "Resto da Divisão: " + resto);
}