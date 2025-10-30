function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

// Função para calcular área
function calcularArea() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const retangulo = new Retangulo(base, altura);
    const area = retangulo.calcularArea();
    document.getElementById('resultado-area').innerText = `Área do Retângulo: ${area}`;
}

// Classe Conta
class Conta {
    constructor(nome, banco, numeroConta, saldo) {
        this.nome = nome;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
}

// Classe Corrente com Saldo Especial
class Corrente extends Conta {
    constructor(nome, banco, numeroConta, saldo, saldoEspecial) {
        super(nome, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }
}

// Classe Poupança com Juros
class Poupanca extends Conta {
    constructor(nome, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nome, banco, numeroConta, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }
}

// Função para criar conta corrente
function criarConta() {
    const nome = document.getElementById('nome').value;
    const banco = document.getElementById('banco').value;
    const numeroConta = document.getElementById('numeroConta').value;
    const saldo = parseFloat(document.getElementById('saldo').value);
    
    const conta = new Conta(nome, banco, numeroConta, saldo);
    mostrarDados(conta);
}

// Função para criar conta corrente especial
function criarContaCorrente() {
    const nome = document.getElementById('nome').value;
    const banco = document.getElementById('banco').value;
    const numeroConta = document.getElementById('numeroConta').value;
    const saldo = parseFloat(document.getElementById('saldo').value);
    const saldoEspecial = parseFloat(document.getElementById('saldoEspecial').value);

    const contaCorrente = new Corrente(nome, banco, numeroConta, saldo, saldoEspecial);
    mostrarDados(contaCorrente);
}

// Função para criar conta poupança
function criarContaPoupanca() {
    const nome = document.getElementById('nome').value;
    const banco = document.getElementById('banco').value;
    const numeroConta = document.getElementById('numeroConta').value;
    const saldo = parseFloat(document.getElementById('saldo').value);
    const juros = parseFloat(document.getElementById('juros').value);
    const dataVencimento = document.getElementById('dataVencimento').value;

    const contaPoupanca = new Poupanca(nome, banco, numeroConta, saldo, juros, dataVencimento);
    mostrarDados(contaPoupanca);
}

// Função para mostrar dados das contas
function mostrarDados(conta) {
    document.getElementById('dados-contas').innerText += JSON.stringify(conta) + '\n';
}