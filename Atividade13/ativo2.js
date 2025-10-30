const imagemJanela = document.getElementById('janela');
const status = document.getElementById('status');

imagemJanela.src = 'janela_fechada.jpg';
status.innerText = 'Janela Fechada';

imagemJanela.addEventListener('mouseover', () => {
    imagemJanela.src = 'janela_aberta.webp';
    status.innerText = 'Janela Aberta';
});

imagemJanela.addEventListener('mouseout', () => {
    imagemJanela.src = 'janela_fechada.jpg';
    status.innerText = 'Janela Fechada';
});

imagemJanela.addEventListener('click', () => {
    imagemJanela.src = 'Jjanela_quebrada.jpg';
    status.innerText = 'Janela Quebrada';
});