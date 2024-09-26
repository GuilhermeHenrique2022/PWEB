function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];

    // Computador fazendo sua escolha de forma misteriosa!
    const numeroAleatorio = Math.random();
    let escolhaComputador = '';

    if (numeroAleatorio < 0.33) {
        escolhaComputador = 'pedra';
    } else if (numeroAleatorio < 0.66) {
        escolhaComputador = 'papel';
    } else {
        escolhaComputador = 'tesoura';
    }

    // Comparando as escolhas
    let resultado = '';
    if (escolhaUsuario === escolhaComputador) {
        resultado = `Empate! Ambos escolheram ${escolhaComputador}`;
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra')
    ) {
        resultado = `Parabéns! Sua escolha foi ${escolhaUsuario} que ganhou de  ${escolhaComputador} da maquina`;
    } else {
        resultado = `MAquina escolheu ${escolhaComputador} e venceu de  ${escolhaUsuario}, sua esocolha.`;
    }

    // Exibindo o resultado de maneira mais pessoal
    document.getElementById('resultado').innerHTML = resultado;
}

