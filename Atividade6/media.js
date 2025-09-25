function calcularMedia() {
    let nome = prompt("Nome do aluno?");

    let nota1 = parseFloat(prompt("Digite a nota 1:"));
    let nota2 = parseFloat(prompt("Digite a nota 2:"));
    let nota3 = parseFloat(prompt("Digite a nota 3:"));
    let nota4 = parseFloat(prompt("Digite a nota 4:"));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert(
        "Aluno: " + nome +
        "\nNota 1: " + nota1 +
        "\nNota 2: " + nota2 +
        "\nNota 3: " + nota3 +
        "\nNota 4: " + nota4 +
        "\n------------------------" +
        "\nMédia Final: " + media
    );
}
