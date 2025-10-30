const imagemJanela = document.getElementById('janela');
const status = document.getElementById('status');

// Variável para guardar o estado
let janelaEstaQuebrada = false;

// Estado inicial
imagemJanela.src = 'janela_fechada.jpg';
status.innerText = 'Janela Fechada';

imagemJanela.addEventListener('mouseover', () => {
    // Só abre se NÃO estiver quebrada
    if (!janelaEstaQuebrada) {
        imagemJanela.src = 'janela_aberta.webp';
        status.innerText = 'Janela Aberta';
    }
});

imagemJanela.addEventListener('mouseout', () => {
    // Só fecha se NÃO estiver quebrada
    if (!janelaEstaQuebrada) {
        imagemJanela.src = 'janela_fechada.jpg';
        status.innerText = 'Janela Fechada';
    }
});

imagemJanela.addEventListener('click', () => {
    // Quebra a janela (e corrige o nome do arquivo)
    janelaEstaQuebrada = true; // Define o estado como "quebrada"
    imagemJanela.src = 'janela_quebrada.jpg'; // Correção do nome do arquivo
    status.innerText = 'Janela Quebrada';
});
