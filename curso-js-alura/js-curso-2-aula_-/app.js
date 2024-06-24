let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagemInicial();

function gerarNumeroAleatorio() {
    let numeroSorteado = Math.ceil(Math.random() * numeroLimite);
    let quantidadeDaLista = listaNumerosSorteados.length;

    if (quantidadeDaLista === numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        console.log(listaNumerosSorteados);
        return numeroSorteado;
    }
}

function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}
function mensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}


function verificarChute() {
    console.log(numeroSecreto);
   let chute = Number(document.querySelector('input').value);

    if (chute === numeroSecreto) {
        let palavraTentativa= tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas= `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }else {
            exibirTextoNaTela('p','O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
