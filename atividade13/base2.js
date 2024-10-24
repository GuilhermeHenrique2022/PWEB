const imagemJanela = document.getElementById('janela');
const status = document.getElementById('status');

imagemJanela.src = 'JANELA_FECHADA.jpg';
status.innerText = 'Janela Fechada';

imagemJanela.addEventListener('mouseover', () => {
    imagemJanela.src = 'JANELA_ABERTA.webp';
    status.innerText = 'Janela Aberta';
});

imagemJanela.addEventListener('mouseout', () => {
    imagemJanela.src = 'JANELA_FECHADA.jpg';
    status.innerText = 'Janela Fechada';
});

imagemJanela.addEventListener('click', () => {
    imagemJanela.src = 'JANELA_QUEBRADA.jpg';
    status.innerText = 'Janela Quebrada';
});
