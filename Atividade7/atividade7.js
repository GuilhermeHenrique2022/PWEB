
function jogar(escolha) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const maquina = opcoes[Math.floor(Math.random() * opcoes.length)];
  const vence = { pedra: 'tesoura', papel: 'pedra', tesoura: 'papel' };

  let mensagem;
  if (escolha === maquina) {
    mensagem = `Empate! Ambos escolheram ${maquina}.`;
  } else if (vence[escolha] === maquina) {
    mensagem = `Parabéns! ${escolha} vence ${maquina}.`;
  } else {
    mensagem = `Que pena! ${maquina} vence ${escolha}.`;
  }

  document.querySelector('#resultado').textContent = mensagem;
}
