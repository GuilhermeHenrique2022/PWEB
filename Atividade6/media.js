function calcularMedia() {
    // nome do aluno
    let nome = prompt("Qual é o nome do aluno?");
    // solicitação notas
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nota4 = parseFloat(prompt("Digite a quarta nota:"));
    // média
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    // média na abas
    alert("A média de " + nome + " é: " + media);
}